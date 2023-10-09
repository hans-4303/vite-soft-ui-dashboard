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

type State = {
[key: string]: string | number | boolean | null | undefined;
};
State는 추상화하였음, 여러 키와 값들이 들어갈 수 있으니까

type Mutations = {
toggleConfigurator(state: State): void;
navbarMinimize(state: State): void;
sidebarType(state: State, payload: string): void;
navbarFixed(state: State): void;
};
Mutations는 사실상 추상화 X, 실무에서 어떤지 모르겠지만 gpt 검색 시 함수 이름은 추상화 하지 않는 것을 추천했음: 함수 내용과 작동을 알려주기 위함이라 이해됨

다만 선언 법 정도는 이해해야 한다 보임

예 1) 함수 하나만 선언할 때
type ReturnTypeFunc = (state: State) => string;

예 2) mutations 처럼 함수를 객체 안에 지정할 때
type Mutations = {
"함수 이름"(파라미터: 파라미터 타입): "리턴 타입 | void"
}

type Actions = {
toggleSidebarColor(context: { commit: Commit }, payload: string): void;
};
type Getters = {
// 필요한 경우 추가
};

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

단, mutations와 actions에 어떤 차이가 있는지 궁금함

views 컴포넌트 파악:

template 단 안에 dom 작성 혹은 컴포넌트 호출하고 script 단 안에 하위 컴포넌트 및 로직 등을 호출하며 상위 컴포넌트를 선언할 수 있다 인지함

리액트와 다소 다르게 document, html, body, window 등 DOM 요소를 활용하는 데 이게 원래 Vue 방식인지는 궁금함

아무 조건이나 대입 없이 class를 선언할 수도 있고, 그렇지 않다면 :class로 조작할 수 있음도 확인함

\*\* :class는 store === vuex state 따라서 동작시켜줄 수도 있다

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

컴포넌트의 props:

렌더링 시 사용할 수 있었음

첫째, 타입스크립트 도입한다면
type Props = {
[key: string]: {
type: StringConstructor | NumberConstructor | BooleanConstructor | FunctionConstructor | null | undefined;
default?: string | number | boolean | Function | null | undefined;
required?: boolean;
};
};
같이 만들 수 있을 것임

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
<!-- <vsud-progress
  color="info"
  variant="gradient"
  :percentage="testingPercentage"
/> -->
이렇게 호출하면 됨

1) 쉽게 얘기한다면

하위 컴포넌트의 prop 앞에 :을 붙여줄 수 있다, 그렇게 하면 해당 prop을 가리키고 실제 전달하고자 하는 데이터나 변수 이름을 넣어줄 수 있다

2) 어렵게 얘기한다면

Vue.js에서 ':'를 사용하면 바인딩된 데이터를 표현할 수 있다, template 단 안에서 데이터를 동적으로 표현할 수 있게 됨

':percentage="testingPercentage"' 문법은 해당 컴포넌트의 props에 값을 전달할 때 사용됨

':percentage': 해당 컴포넌트의 props 중 하나인 percentage에 값을 전달하는 것을 뜻함

'testingPercentage': 이 부분은 실제로 전달하고자 하는 데이터 또는 변수 이름이며 해당 변수에 저장된 값이 percentage prop에 전달됨

즉, ':percentage="testingPercentage"'는 'testingPercentage' 변수 값을 'percentage' prop에 전달하는 것을 나타내며, 이렇게 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 수 있다.