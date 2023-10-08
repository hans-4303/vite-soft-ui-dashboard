<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start">
                    <label>Email</label>
                    <vsud-input type="email" placeholder="Email" name="email" />
                    <label>Password</label>
                    <vsud-input type="password" placeholder="Password" name="password" />
                    <vsud-switch id="rememberMe" checked>Remember me</vsud-switch>
                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        full-width
                      >Sign in</vsud-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      class="text-info text-gradient font-weight-bold"
                    >Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      `url(${bgImg})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<!-- 컴포넌트 호출 및 정의하는 script 단 -->
<script>
/* 컴포넌트 및 이미지 호출 */
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved9.jpg"

/* body 요소 호출하여 [0]에 접근하고 반환 */
const body = document.getElementsByTagName("body")[0];

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 이름 */
  name: "SigninPage",
  /* 호출할 컴포넌트 */
  components: {
    Navbar,
    AppFooter,
    VsudInput,
    VsudSwitch,
    VsudButton,
  },
  /* 사용할 데이터: 함수 형식, 여기서는 data()가 아닌 리턴된 키를 그대로 다룰 수 있다 */
  data() {
    /* ES6 문법으로 추정: bgImg: bgImg */
    return {
      bgImg
    }
  },
  /* 마운트 되기 전 */
  beforeMount() {
    /* store === vuex에 접근하여 state 조작 */
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    /* body classList에 접근하여 지정 클래스 == css 삭제 */
    body.classList.remove("bg-gray-100");
  },
  /* 언마운트 전 */
  beforeUnmount() {
    /* store === vuex에 접근하여 state 조작 */
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    /* body classList에 접근하여 지정 클래스 == css 추가 */
    body.classList.add("bg-gray-100");
  },
};
</script>
