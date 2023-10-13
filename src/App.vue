<!-- 실제 표시되는 template 단 -->
<template>
  <!-- sidenav 컴포넌트 === <Sidenav />
  v-if, custom_class, class 모두 store === vuex에 따라 동작 -->
  <sidenav
    v-if="$store.state.showSidenav"
    :custom_class="$store.state.mcolor"
    :class="[
      $store.state.isTransparent,
      $store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
  />
  <!-- main, class와 style 있음: style은 store === vuex에 따라 동작 -->
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    :style="$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav: v-if, text-white 모두 store === vuex에 따라 동작
    navClasses는 하단 computed에 따라 동작하는 걸로 추정
    또한 navbarMinimize는 method: mapMutations에 정의됨 -->
    <navbar
      v-if="$store.state.showNavbar"
      :class="[navClasses]"
      :text-white="$store.state.isAbsolute ? 'text-white opacity-8' : ''"
      :min-nav="navbarMinimize"
    />
    <!-- 선언했던 router에 따른 view 컴포넌트 호출 -->
    <router-view />
    <!-- 공통 app-footer -->
    <app-footer v-show="$store.state.showFooter" />
    <!-- 토글 기능 함수는 method에 포함
    class는 store === vuex에 따라 움직임 -->
    <configurator
      :toggle="toggleConfigurator"
      :class="[
        $store.state.showConfig ? 'show' : '',
        $store.state.hideConfigButton ? 'd-none' : '',
      ]"
    />
  </main>
</template>

<script>
import Sidenav from "./examples/Sidenav/index.vue";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";

/* 렌더될 앱 */
export default {
  /* 앱 이름 */  
  name: "App",
  /* 현재 상위 컴포넌트가 호출해올 컴포넌트 요소들 */
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter,
  },

  /* vue의 함수형 속성, 로직을 가지고 값을 계산 후 리턴하는 함수
  반환 값은 파라미터 함수가 반환하는 값을 가지는 proxy 객체 일종 */
  computed: {
    navClasses() {
      /* 각각의 클래스에 대해 store === vuex에 접근하여 state를 호출하거나 부정함 */
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":
          this.$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2":
          this.$store.state.isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  /* 컴포넌트 마운트 직전에 호출됨, store === vuex에 접근하여 클래스 대입 */
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
  /* methods: 특정 기능 별로 묶을 수 있는 JS 함수 의미

  ...mapMutations: 코드 가독성을 높이기 위한 방법
  모두 store === vuex와 연관
  
  이때 vuex의 mutations 메서드 명 === App.vue 메서드 동일하다면 인수는 배열로서 묶고 메서드 명을 문자열로 선언
  vuex의 mutations 메서드 명 !== App.vue 메서드 명 다르다면 인수는 객체로서 묶고 키에는 현 컴포넌트에서 사용하려는 메서드 이름, 값에는 vuex의 mutation을 문자열로 호출 */
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
};
</script>
