<template>
  <!-- Navbar -->
  <!-- props 따라 :class 대입하고 삼항 연산 -->
  <nav
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container">
      <!-- router-link 컴포넌트
      to: /dashboard로 경로 설정
      v-bind?? 그리고 $attrs? 찾아보기 -->
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        to="/dashboard"
        v-bind="$attrs"
        :class="isBlur ? 'text-dark' : 'text-white'"
      >Vite Soft UI Dashboard</router-link>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div id="navigation" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center me-2 active"
              aria-current="page"
              to="/dashboard"
            >
              <i
                class="fa fa-chart-pie opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/profile">
              <i
                class="fa fa-user opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i>
              Profile
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-up">
              <i
                class="fas fa-user-circle opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i>
              Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-in">
              <i
                class="fas fa-key opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i>
              Sign In
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/product/vue-soft-ui-dashboard"
              class="btn btn-sm btn-round mb-0 me-1"
              :class="isBlur ? 'bg-gradient-dark' : 'bg-gradient-success'"
            >Free download</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<!-- 컴포넌트 호출 및 선언하는 스크립트 단 -->
<script>
/* 이미지 호출 */
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

/* 상위 컴포넌트 선언 */
export default {
  /* 고유 name */
  name: "NavbarComponent",
  /* props 선언 */
  props: {
    /* [key: String]: {
      type: Function;
      default: String;
    } */
    btnBackground: {
      type: String,
      default: ""
    },
    isBlur: {
      type: String,
      default: ""
    },
    /* [key: String]: {
      type: Function;
      default: Boolean;
    } */
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  /* data, 함수 형이며 객체 반환, 키는 컴포넌트에서 사용 가능 */
  data() {
    return {
      downArrWhite,
      downArrBlack,
    };
  },
  /* computed, 의존성 따라 로직 실행 */
  computed: {
    /* darkModes() 메서드 {
      [key: String]: this.darkMode == [key: String]: { type: Function; default: Boolean; }
    } */
    darkModes() {
      return {
        "text-dark": this.darkMode,
      };
    },
  },
};
</script>
