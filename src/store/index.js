/* 앱 전반 상태 관리를 vuex로 구성 */
import { createStore } from "vuex";

/* 반환하지 않고 createStore 자체를 내보냄 */
export default createStore({
  /* 전역 state */
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    mcolor: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
  },
  /* reducer 함수와 유사한 것으로 보임 */
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      const sidenav = document.getElementById("sidenav-main");

      if (sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.remove("g-sidenav-pinned");
        setTimeout(function () {
          sidenav.classList.remove("bg-white");
        }, 100);
        sidenav.classList.remove("bg-transparent");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav.classList.add("bg-white");
        sidenav.classList.remove("bg-transparent");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
  },
  /* 이것도 reducer와 비슷한가? 그렇다면 mutation과 action 차이를 알아내야 함 */
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
  },
  getters: {},
});
