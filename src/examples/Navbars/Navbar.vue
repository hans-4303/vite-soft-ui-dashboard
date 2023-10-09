<template>
  <nav
    v-bind="$attrs"
    id="navbarBlur"
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :current-page="currentRouteName" :text-white="textWhite" />
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="$store.state.isRTL ? 'px-0' : 'me-sm-4'"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              :placeholder="
                $store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
              "
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'Sign In' }"
              class="px-0 nav-link font-weight-bold"
              :class="textWhite ? textWhite : 'text-body'"
            >
              <i class="fa fa-user" :class="$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"></i>
              <span v-if="$store.state.isRTL" class="d-sm-inline d-none">يسجل دخول</span>
              <span v-else class="d-sm-inline d-none">Sign In</span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <!-- @click == onClick을 통해 현 컴포넌트 toggleSidebar 메서드 호출:
            직후 store 메서드들이 호출되어 처리됨 -->
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-body"
              @click="toggleSidebar"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a
              class="p-0 nav-link"
              :class="textWhite ? textWhite : 'text-body'"
              @click="toggleConfigurator"
            >
              <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
            </a>
          </li>
          <li
            class="nav-item dropdown d-flex align-items-center"
            :class="$store.state.isRTL ? 'ps-2' : 'pe-2'"
          >
            <a
              id="dropdownMenuButton"
              href="#"
              class="p-0 nav-link"
              :class="[
                textWhite ? textWhite : 'text-body',
                showMenu ? 'show' : '',
              ]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i class="cursor-pointer fa fa-bell"></i>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/team-2.jpg"
                        class="avatar avatar-sm me-3"
                        alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New message</span> from
                        Laur
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/small-logos/logo-spotify.svg"
                        class="avatar avatar-sm bg-gradient-dark me-3"
                        alt="logo spotify"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New album</span> by
                        Travis Scott
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto avatar avatar-sm bg-gradient-secondary me-3">
                      <svg
                        width="12px"
                        height="12px"
                        viewBox="0 0 43 36"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>credit-card</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g
                            transform="translate(-2169.000000, -745.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path
                                  class="color-background"
                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                  opacity="0.593633743"
                                />
                                <path
                                  class="color-background"
                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">Payment successfully completed</h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        2 days
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- 컴포넌트 호출 및 정의하는 스크립트 단 -->
<script>
/* 컴포넌트 호출 */
import Breadcrumbs from "../Breadcrumbs.vue";
/* store === vuex에서 Mutation과 Action 다루기 위함, methods에 설정 */
import { mapMutations, mapActions } from "vuex";

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 name */
  name: "NavbarComponent",
  /* 호출 컴포넌트 */
  components: {
    Breadcrumbs,
  },
  /* props */
  props: {
    /* [key: String]: {
      type: 데이터 타입들,
      default: 데이터 값 혹은 () => {} (함수 경우)
    } */
    minNav: {
      type: Function,
      default: () => { }
    },
    /* [key: String]: {
      type: 데이터 타입들,
      default: 데이터 값
    } */
    textWhite: {
      type: String,
      default: ""
    },
  },
  /* data, 함수 형이며 객체 리턴하고 키는 현 컴포넌트에서 사용 가능 */
  data() {
    return {
      showMenu: false,
    };
  },
  /* computed, 종속성 따라 호출되는 로직들 */
  computed: {
    /* 메서드 안의 요소들이 갱신되면 호출됨, == useEffect(() => {}, ["종속성"]) */
    currentRouteName() {
      return this.$route.name;
    },
  },
  /* 인스턴스 작성 후 동기적으로 호출됨
  데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등 같은 옵션 처리 완료함
  단, 마운트 시작 전이라 $el 속성 사용 불가 */
  created() {
    this.minNav;
  },
  /* updated
  반응형 상태 변경에 의한 컴포넌트 DOM 트리 업데이트 후 호출

  세부사항:
  부모 컴포넌트 updated은 자식 컴포넌트 updated 훅 이후에 호출됨: 자식 -> 부모
  *** 한 코드 블럭 내 특정 상태 변경 후 이어서 업데이트 된 DOM에 접근해야 하는 로직 경우 nextTick() 사용 */
  updated() {
    /* 요소 반환 */
    const navbar = document.getElementById("navbarBlur");
    /* window 객체 조작: 스크롤 이벤트 시 실행할 로직 */
    window.addEventListener("scroll", () => {
      /* 만약 10 이상 세로 스크롤 되었고 store === vuex의 isNavFixed가 성립하면 */
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        /* classList에 클래스 == css 추가 */
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        navbar.classList.add("shadow-blur");
      } else {
        /* 그렇지 않으면 클래스 == css 빼기 */
        navbar.classList.remove("blur");
        navbar.classList.remove("position-sticky");
        navbar.classList.remove("shadow-blur");
      }
    });
  },
  /* 작동 시 호출할 수 있는 메서드들 */
  methods: {
    /* store === vuex에서 받아오는 메서드들
    store에서 이름과 현 컴포넌트에서 다룰 이름이 같으므로 배열 안에 문자열 나열 */
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    // 이 컴포넌트에서 사용할 메서드
    toggleSidebar() {
      /* 호출되면 store 메서드를 다시 호출 */
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
  },
};
</script>
