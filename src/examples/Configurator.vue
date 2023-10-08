<template>
  <div class="fixed-plugin">
    <a class="px-3 py-2 fixed-plugin-button text-dark position-fixed" @click="toggle">
      <i class="py-2 fa fa-cog"></i>
    </a>
    <div class="shadow-lg card blur">
      <div class="pt-3 pb-0 bg-transparent card-header">
        <div class="float-start">
          <h5 class="mt-3 mb-0">Soft UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div class="mt-4 float-end" @click="toggle">
          <button class="p-0 btn btn-link text-dark fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
      <hr class="my-1 horizontal dark" />
      <div class="pt-0 card-body pt-sm-3">
        <!-- Sidebar Backgrounds -->
        <div>
          <h6 class="mb-0">Sidebar Colors</h6>
        </div>
        <a href="#" class="switch-trigger background-color">
          <div class="my-2 badge-colors" :class="$store.state.isRTL ? 'text-end' : ' text-start'">
            <span
              class="badge filter bg-gradient-primary active"
              data-color="primary"
              @click="sidebarColor('primary')"
            ></span>
            <span
              class="badge filter bg-gradient-dark"
              data-color="dark"
              @click="sidebarColor('dark')"
            ></span>
            <span
              class="badge filter bg-gradient-info"
              data-color="info"
              @click="sidebarColor('info')"
            ></span>
            <span
              class="badge filter bg-gradient-success"
              data-color="success"
              @click="sidebarColor('success')"
            ></span>
            <span
              class="badge filter bg-gradient-warning"
              data-color="warning"
              @click="sidebarColor('warning')"
            ></span>
            <span
              class="badge filter bg-gradient-danger"
              data-color="danger"
              @click="sidebarColor('danger')"
            ></span>
          </div>
        </a>
        <!-- Sidenav Type -->
        <div class="mt-3">
          <h6 class="mb-0">Sidenav Type</h6>
          <p class="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div class="d-flex">
          <button
            id="btn-transparent"
            class="px-3 mb-2 btn bg-gradient-success w-100"
            :class="ifTransparent === 'bg-transparent' ? 'active' : ''"
            @click="sidebarType('bg-transparent')"
          >Transparent</button>
          <button
            id="btn-white"
            class="px-3 mb-2 btn bg-gradient-success w-100 ms-2"
            :class="ifTransparent === 'bg-white' ? 'active' : ''"
            @click="sidebarType('bg-white')"
          >White</button>
        </div>
        <p
          class="mt-2 text-sm d-xl-none d-block"
        >You can change the sidenav type just on desktop view.</p>
        <!-- Navbar Fixed -->
        <div class="mt-3">
          <h6 class="mb-0">Navbar Fixed</h6>
        </div>
        <div class="form-check form-switch ps-0">
          <input
            id="navbarFixed"
            v-model="fixedKey"
            class="mt-1 form-check-input"
            :class="$store.state.isRTL ? 'float-end  me-auto' : ' ms-auto'"
            type="checkbox"
            :checked="$store.state.isNavFixed"
            @change="setNavbarFixed"
          />
        </div>
        <hr class="horizontal dark my-sm-4" />
        <a
          class="btn bg-gradient-info w-100"
          href="https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro"
        >Buy now</a>
        <a
          class="btn bg-gradient-dark w-100"
          href="https://www.creative-tim.com/product/vue-soft-ui-dashboard"
        >Free demo</a>
        <a
          class="btn btn-outline-dark w-100"
          href="https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/"
        >View documentation</a>
        <div class="text-center w-100">
          <a
            class="github-button"
            href="https://github.com/creativetimofficial/vue-soft-ui-dashboard"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
          >Star</a>
          <h6 class="mt-3">Thank you for sharing!</h6>
          <a
            href="https://twitter.com/intent/tweet?text=Check%20Vue%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fvue-soft-ui-dashboard"
            class="mb-0 btn btn-dark me-2"
            target="_blank"
          >
            <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vue-soft-ui-dashboard"
            class="mb-0 btn btn-dark me-2"
            target="_blank"
          >
            <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- store === vuex 호출 및 컴포넌트 선언하는 스크립트 단 -->
<script>
/* mapMutation, mapActions 호출 */
import { mapMutations, mapActions } from "vuex";
/* 상위 컴포넌트 선언 */
export default {
  /* 고유 name */
  name: "ConfiguratorComponent",
  /* props */
  props: {
    /* [key: String]: {
      type: Function | String | Number | Boolean... (추정)
      default: () => { }, 함수 타입
    } */
    toggle: {
      type: Function,
      default: () => { }
    },
  },
  /* data, 함수 형이며 객체 리턴되어서 본 컴포넌트 사용 가능 */
  data() {
    return {
      fixedKey: "",
    };
  },
  /* vue의 함수형 속성, 로직을 가지고 값을 계산 후 리턴하는 함수
  반환 값은 파라미터 함수가 반환하는 값을 가지는 proxy 객체 일종
  
  종속 대상을 따라 저장(캐싱) 되는 특징을 가짐 == useEffect(() => {}, ["의존성"]) */
  computed: {
    /* ifTransparent 로직, store === vuex 접근하여 state 반환 */
    ifTransparent() {
      return this.$store.state.isTransparent;
    },
    /* sidenavResponsive 로직, this.sidenavTypeOnResize로 메서드 호출함 */
    sidenavResponsive() {
      return this.sidenavTypeOnResize;
    },
  },
  /* 마운트 전 */
  beforeMount() {
    /* store === vuex 접근하여 값 대입 */
    this.$store.state.isTransparent = "bg-transparent";
    /* Deactivate sidenav type buttons on resize and small screens:
    크기 조정 및 작은 화면에서 사이드나브 유형 버튼 비활성화 */
    window.addEventListener("resize", this.sidenavTypeOnResize);
    window.addEventListener("load", this.sidenavTypeOnResize);
  },
  /* 메서드 정의, 조작될 때마다 처리 해야 하는 로직 */
  methods: {
    /* ...mapMutations, mapActions 모두 vuex와 메서드 명이 같으므로 배열 안에 문자열 나열 */
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    ...mapActions(["toggleSidebarColor"]),

    /* sidebarColor 조건으로 움직임, 기본 값 파라미터: "success" */
    sidebarColor(color = "success") {
      /* 문서 전체 지정하고 #sidenav-main 호출하여 attr 설정 */
      document.querySelector("#sidenav-main").setAttribute("data-color", color);
      /* store === vuex 접근하여 값 대입하기 */
      this.$store.state.mcolor = `card-background-mask-${color}`;
    },

    /* sidebarType, 타입 파라미터 받아서 mapActions의 toggleSidebarColor를 호출하고 인수로 type 전달 */
    sidebarType(type) {
      this.toggleSidebarColor(type);
    },

    /* @change == onChange로 호출되는 로직 */
    setNavbarFixed() {
      /* 앱의 현재 route 이름이 Profile인 조건으로 store === vuex에 접근하여 state를 반대로 조작 */
      if (this.$route.name !== "Profile") {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },

    /* sidenavTypeOnResize: computed 안에서 호출됨 */
    sidenavTypeOnResize() {
      /* #btn-transparent 호출 및 반환 */
      let transparent = document.querySelector("#btn-transparent");
      /* #btn-white 호출 및 반환 */
      let white = document.querySelector("#btn-white");
      /* window.innerWidth < 1200 조건 */
      if (window.innerWidth < 1200) {
        /* 요소에 disabled 클래스 == css 추가 */
        transparent.classList.add("disabled");
        white.classList.add("disabled");
      } else {
        /* 조건이 깨지면 클래스 == css 제거 */
        transparent.classList.remove("disabled");
        white.classList.remove("disabled");
      }
    },
  },
};
</script>
