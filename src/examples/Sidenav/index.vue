<template>
  <aside
    id="sidenav-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    :data-color="sidenavActiveBgColors"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img :src="logo" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Vite Soft UI Dashboard</span>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :card-bg="customClass" />
  </aside>
</template>

<!-- 컴포넌트 호출 및 선언하는 스크립트 단 -->
<script>
/* 컴포넌트 및 이미지 호출 */
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct.png";

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 name */
  name: "IndexComponent",
  /* 호출 컴포넌트 */
  components: {
    SidenavList,
  },
  /* props 정의 */
  props: {
    /* [key: String]: {
      type: Function; 왜냐하면 String()을 통해 반환되는 인스턴스일 수 있어서
      default: String;
    } */
    customClass: {
      type: String,
      default: ""
    },
  },
  /* data, 함수 형이며 객체를 리턴하고 키는 컴포넌트에서 활용 가능 */
  data() {
    return {
      logo,
      sidenavActiveBgColors: 'success'
    };
  },
};
</script>
