** 진행사항 **

23/10/7
템플릿 설치 및 준비 단계

템플릿 설치:

VUE 3을 충족하는 템플릿으로 찾아봄, Vuex도 학습 가능해보임

scss 이슈:
scss 파일은 마치 함수와 반환 값 형식으로 CSS를 관리하고 있는 것으로 파악했지만, 에러 뜨는 상황이 잦았음: 템플릿 실행을 위해서 sass를 다운그레이드
before) "sass": "^1.54.4"
after) "sass": "~1.32.12"
출처) https://tempodivalse.tistory.com/43

23/10/8
템플릿 분석 단계

App.vue 컴포넌트 파악:

v-if, v-else 로직 인지, 이는 조건 ? 참 : 거짓과 유사하다 파악
경로에 따른 렌더링은 router-view 컴포넌트에서 처리된다 인지

상위 컴포넌트 선언 방식:

고유 이름, 호출할 컴포넌트, computed 등 로직, 생명주기 메서드, 컴포넌트가 사용할 메서드 등으로 정의된다 인지

main 컴포넌트 파악:

앱을 생성하고, createApp()
컴포넌트와 store, 라우터, JS, CSS 등을 호출할 수 있다 인지함
생성 시 createApp()의 인수로 최상위 컴포넌트 App을 대입, 사용하는 컴포넌트들이나 JS 등은 use()를 체이닝하고 인수로 넣어준 뒤 mount() 호출, 인수는 렌더링 할 div를 가리키면 됨

router 파악:
routes 배열은
[
{
경로: 지정 경로
이름: 경로 이름
리디렉트?: 목적 경로
컴포넌트?: 경로 별 호출 컴포넌트
}, ...
]
구조로 이루어짐
실제 라우터는 createRouter({})를 통해 생성 반환됨
history는 무엇인지 모르겠음, 탐색 기록인지??
그리고 routes 대입, 배열이지만 순회하면서 생성되는 걸로 추정
링크 클래스 설정도 가능

store 파악:

vuex에서 createStore 호출, 단일 store 생성

조금 특이하게 createStore({...}) 자체를 내보냄 <-> 리액트는 export default store; 로 정의 됐으니까

createStore 인수는 객체 형태이며 키와 값, 로직 등 작성 가능

타입과 데이터를 같이 정리해본다면

<!--
type State = {
[key: string]: string | number | boolean | null | undefined;
};
-->

State는 추상화하였음, 여러 키와 값들이 들어갈 수 있으니까

<!--
type Mutations = {
toggleConfigurator(state: State): void;
navbarMinimize(state: State): void;
sidebarType(state: State, payload: string): void;
navbarFixed(state: State): void;
};
-->

Mutations는 사실상 추상화 X, 실무에서 어떤지 모르겠지만 gpt 검색 시 함수 이름은 추상화 하지 않는 것을 추천했음: 함수 내용과 작동을 알려주기 위함이라 이해됨

다만 선언 법 정도는 이해해야 한다 보임

예 1) 함수 하나만 선언할 때

<!--
type ReturnTypeFunc = (state: State) => string;
-->

예 2) mutations 처럼 함수를 객체 안에 지정할 때

<!--
type Mutations = {
"함수 이름"(파라미터: 파라미터 타입): "리턴 타입 | void"
}
-->

<!--
type Actions = {
toggleSidebarColor(context: { commit: Commit }, payload: string): void;
};
-->

<!--
type Getters = {
// 필요한 경우 추가
};
-->

<!--
export default createStore<{ state: State; mutations: Mutations; actions: Actions; getters: Getters }>({
state: {

},
mutations: {

},
actions: {

},
getters: {

}
})
-->

단, mutations와 actions에 어떤 차이가 있는지 궁금함

views 컴포넌트 파악:

template 단 안에 dom 작성 혹은 컴포넌트 호출하고 script 단 안에 하위 컴포넌트 및 로직 등을 호출하며 상위 컴포넌트를 선언할 수 있다 인지함

리액트와 다소 다르게 document, html, body, window 등 DOM 요소를 활용하는 데 이게 원래 Vue 방식인지는 궁금함

아무 조건이나 대입 없이 class를 선언할 수도 있고, 그렇지 않다면 :class로 조작할 수 있음도 확인함

:class는 store === vuex state 따라서 동작시켜줄 수도 있다

스크립트 단에서 상위 컴포넌트를 선언하고 data() 선언된 경우 있었음, 컴포넌트가 사용하려는 데이터로 생각할 수 있었고 객체를 반환하며 키는 컴포넌트에서 활용할 수 있었다.

접근 또한 data().salary.classIcon (X), salary.classIcon 같이 키 이름을 바로 접근해야 함

chart.js 활용:

물론 개별 요구사항과 패키지 활용 부분이지만 정리해봄

Vue 환경에서는 canvas를 작성하고 해당 canvas DOM을 직접 활용함, 문법도 document.getElementById("chart-bars").getContext("2d")와 같음

이후 new Chart("반환받은 캔버스 요소", {
차트 타입,
데이터: {
라벨: ["요소들", ...],
데이터셋: [{차트별 데이터}, ...]
},
차트 옵션: {
반응형,
크기 조정 시 캔버스 방향 비율 유지,
차트 전체 플러그인 선언,
상호작용,
축(X, Y)
}
})
와 같음

그리고 선형 차트 경우 canvas 작성 및 반환은 같으나, 그라데이션 및 색상 중단점을 작성할 수 있음

특이한 컴포넌트 생명 주기:

created !== mounted

created
인스턴스 작성된 후 동기적으로 호출됨
부모 자식 관계 컴포넌트 렌더링 될 때 mounted보다 먼저 호출됨
부모 -> 자식 순으로 실행
데이터 초기화 선언을 created에서 많이 한다
가상 돔 조작 불가: ($el 속성 아직 사용 불가)

mounted
부모 자식 관계 컴포넌트 렌더링 될 때 created 다음 호출되고 자식 -> 부모 순 실행
el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출 됨, 가상 돔 조작 가능
돔 조작 관련을 mounted 영역에 기술함.

생명 주기 따른 store 조작:

마운트 전, 언마운트 전 등 시기를 나누어 store === vuex를 조작하는 경우 있었다 인지함

컴포넌트의 computed:

객체 형태로 이루어지며 로직들을 선언 가능, 로직 내부의 값이 바뀔 때 호출 및 재실행된다 == useEffect(() => {}, [<!-- 의존성 -->])

컴포넌트의 methods:

객체 형태로 이루어지며 로직들을 호출 혹은 선언 가능, 로직 내부 값이 바뀌는 것과는 상관 없으며 호출 될 때 실행 됨 == useEffect 혹은 useMemo, useCallback 형태가 아닌 함수들, 대개 이벤트 형식으로 호출되는 경우 많다

컴포넌트의 props:

렌더링 시 사용할 수 있었음, template 단 안에서 활용 시 {{ prop }}와 같이 호출해야 함

첫째, 타입스크립트 도입한다면

<!--
type Props = {
[key: string]: {
type: StringConstructor | NumberConstructor | BooleanConstructor | FunctionConstructor | null | undefined;
default?: string | number | boolean | Function | null | undefined;
required?: boolean;
};
};
-->

같이 만들 수 있을 것임

<!--
더 유연하게 만든다면?

type Props = {
  [key: string]: StringConstructor | NumberConstructor | BooleanConstructor | FunctionConstructor | {
    type: StringConstructor | NumberConstructor | BooleanConstructor | FunctionConstructor | null | undefined;
    default?: string | number | boolean | Function | null | undefined;
    required?: boolean;
  };
};

코드의 가독성: Props 타입이 매우 유연하게 정의되어 있으므로, 사용하는 곳에서 어떤 props가 어떤 형태와 값으로 전달되어야 하는지 명확하게 이해하기 어려울 수 있습니다. 따라서 가능한 한 코드의 가독성을 고려해야 합니다.

타입 추론: 이렇게 유연한 타입을 사용할 때 TypeScript의 타입 추론 기능을 활용하려면 주의가 필요합니다. 때로는 타입 어노테이션을 명시적으로 추가해야 할 수도 있습니다.

주의하십시오: 이렇게 유연한 타입을 사용할 때 오류를 방지하기 위해 코드를 신중하게 작성해야 합니다. Vue 컴포넌트에서 props를 올바르게 사용하고 관리하기 위해 추가적인 주석이나 문서화가 필요할 수 있습니다.
-->

덧붙여 여러 type을 배열 안에 선언할 수 있음
type: [Object, String]

이는 해당 prop이 여러 타입 중 하나일 수 있다는 의미이며 정의된 타입 중 하나와 일치하면 유효함

<!--
<template>
  <div>
    객체를 전달하는 경우
    <my-component :to="{ path: '/example' }" />
    문자열을 전달하는 경우
    <my-component :to="'/example'" />
  </div>
</template>
-->

둘째, data()와 props 차이점이 내 생각하는 게 맞는지?

물론 둘 다 렌더링에 활용할 수 있는데 data()는 컴포넌트 안에서 호출될 내용이고, props라면 부모 컴포넌트가 해당 컴포넌트를 불러올 때 props에 넘기는 경우라 보임, 생각하는 게 맞는지

data() 혹은 props로 ProjectsTable.vue 조작 가능한지 시험해보기: 성공

처음보는 문법 때문이었음

data() {
return {
testingPercentage: 43,
};
},
가 컴포넌트에 정의되었다 하고

하위 컴포넌트는

<!--
<vsud-progress
  color="info"
  variant="gradient"
  :percentage="testingPercentage"
/>
-->

이렇게 호출하면 됨

1. 쉽게 얘기한다면

하위 컴포넌트의 prop 앞에 :을 붙여줄 수 있다, 그렇게 하면 해당 prop을 가리키고 실제 전달하고자 하는 데이터나 변수 이름을 넣어줄 수 있다

2. 어렵게 얘기한다면

Vue.js에서 ':'를 사용하면 바인딩된 데이터를 표현할 수 있다, template 단 안에서 데이터를 동적으로 표현할 수 있게 됨

':percentage="testingPercentage"' 문법은 해당 컴포넌트의 props에 값을 전달할 때 사용됨

':percentage': 해당 컴포넌트의 props 중 하나인 percentage에 값을 전달하는 것을 뜻함

'testingPercentage': 이 부분은 실제로 전달하고자 하는 데이터 또는 변수 이름이며 해당 변수에 저장된 값이 percentage prop에 전달됨

즉, ':percentage="testingPercentage"'는 'testingPercentage' 변수 값을 'percentage' prop에 전달하는 것을 나타내며, 이렇게 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 수 있다.

template 단 안에서 함수 호출:

template 단 안에서 함수를 호출해줄 수 있음

<!-- {{new Date().getFullYear()}} -->

와 같은 문법으로 가능함, 리액트는 중괄호가 한 번, 뷰는 두 번

통상 prop와 바인딩 prop 동시 사용:

<!--
<ol
  class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
  :class="$store.state.isRTL ? '' : ' me-sm-6'"
>
-->

와 같이 요소의 통상 prop과 바인딩 prop을 동시에 사용해줄 수도 있다, 바인딩 prop은 추가로 prop에 전달되기 때문에, store === vuex state를 따라 조건부로 전달해줄 수도 있었다.

이미지 호출 시 문법:

<!--
<div class="full-background" :style="{ 'background-image': 'url(' + imgWhiteCurved + ')' }"></div>
-->

CSS처럼 속성과 url을 그대로 대입하되, data 안에 있는 이미지를 그대로 호출함

:으로 정의된 바인딩 prop이기 때문에, {
'background-image': 'url(' + imgWhiteCurved + ')'
}를 style prop에 추가로 전달함

imgWhiteCurved를 문자열로 취급.... 하기 위해서 앞 뒤로 따옴표를 더하는 걸로 보임

this.$route.path:

this, $route, path 세 부분으로 나누어보기

this는 Vue.js 컴포넌트 자체를 나타냄, 해당 Vue 컴포넌트 인스턴스에 접근하는데 사용.

$route는 Vue Router에서 제공하는 라우터 객체(Route 객체)를 나타냄.
Vue Router는 Vue.js 애플리케이션에서 라우팅 기능을 제공하는 라이브러리.

.path는 $route 객체의 속성 중 하나로, 현재 라우팅 경로를 나타냄.

$로 시작하는 객체들:

$route: Vue Router에서 제공하는 현재 라우팅 정보에 접근하는 객체입니다. $route.path, $route.params, $route.query 등을 포함합니다.

$router: Vue Router에서 제공하는 라우팅을 제어하는 객체로, 페이지 이동 및 라우터 설정 변경에 사용됩니다.

$store: Vuex 스토어에 접근하는 객체로, 애플리케이션의 전역 상태 관리를 위해 사용됩니다.

$emit: 컴포넌트 간의 커스텀 이벤트 통신을 위해 사용되며, 이벤트를 발생시키는 메서드입니다.

$refs: 컴포넌트 내에서 자식 컴포넌트 또는 DOM 요소에 접근하기 위해 사용되는 객체입니다.

$nextTick: Vue.js가 DOM 업데이트를 처리한 후에 콜백 함수를 실행하기 위해 사용되는 함수입니다.

$createElement: 렌더 함수에서 사용되며 가상 DOM 요소를 생성하는 함수입니다.

$options: 컴포넌트의 옵션을 나타내는 객체로, 컴포넌트의 설정 정보를 확인할 수 있습니다.

$watch: 데이터의 변화를 감지하고 처리하는 데 사용되며, 반응형 데이터를 감시할 때 유용합니다.

$mount: Vue 인스턴스를 직접 마운트하는 메서드입니다.

$attrs:

부모 컴포넌트로부터 전달된 속성들을 나타내는 객체, 컴포넌트 재사용성 높이고 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달할 때 사용됨

$attrs 객체는 컴포넌트 template 단에서 사용할 수 있으며 역할은 다음과 같음

1. 부모 컴포넌트에서 전달된 모든 속성 포함
2. $attrs를 사용하여 부모 컴포넌트에서 전달된 속성을 자식 컴포넌트 템플릿에서 사용 가능
3. 자식 컴포넌트에서 $attrs 사용하여 특정 속성을 다른 HTML 요소에 바인딩 하거나 조작 가능

예시)

<!--
<template>
  <div>
    $attrs를 사용하여 부모 컴포넌트에서 전달된 title $attrs를 사용하여 부모 컴포넌트에서 전달된 title 속성을 div 요소에 바인딩
    <div :title="$attrs.title">
      컴포넌트 내용
    </div>
  </div>
</template>
-->

이렇게 하면 부모 컴포넌트에서

<!--
<my-component title="툴팁 메시지"></my-component>
-->

같이 전달한 'title' 속성을 '$attrs.title'을 통해 자식 컴포넌트 내부에서 사용할 수 있다

1. $attrs를 사용하여 부모 컴포넌트에서 전달된 속성을 자식 컴포넌트 내부에서 사용할 때, 해당 속성은 자식 컴포넌트 내부 props로 정의되어 있어서는 안 됨: 중복 속성이 생길 수 있음
2. 만약 부모 컴포넌트에서 $attrs를 사용하여 자식 컴포넌트에게 데이터 전달하고 싶다면 부모 컴포넌트에서 속성 이름을 v-bind: 또는 :(바인딩 prop)과 함께 사용, 명시적으로 자식 컴포넌트 prop에 전달해야 함

store === vuex, 컴포넌트 methods 이해:

컴포넌트 정의 시 methods 객체를 정의할 수 있음, 현재 컴포넌트에서 작동해야 할 메소드를 다룸

대개 이벤트를 통해 호출할 수 있는 메소드들이 정의됨

이때 store === vuex를 정의했다면
...mapMutations(["메소드 명"]),
...mapActions(["메소드 명"]),
과 같이 store의 메소드를 나열해줄 수 있다.

경우에 따라 현재 호출된 store === vuex 메소드들을 현재 컴포넌트의 메소드에 다시 호출해줄 수도 있음

문법)
현 컴포넌트 메소드() {
this.스토어 메소드("인수");
}
