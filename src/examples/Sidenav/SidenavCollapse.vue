<template>
  <router-link class="nav-link" :to="to" v-bind="$attrs">
    <div
      class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
      :class="$store.state.isRTL ? ' ms-2' : 'me-2'"
    >
      <slot name="icon"></slot>
    </div>
    <span
      class="nav-link-text"
      :class="$store.state.isRTL ? ' me-1' : 'ms-1'"
      >{{ navText }}</span
    >
  </router-link>
</template>
<!-- 컴포넌트 선언 하는 스크립트 단 -->
<script>
/* 컴포넌트 선언 */
export default {
  /* 고유 name */
  name: "SidenavCollapse",
  /* props */
  props: {
    /* [key: String]: {
      type: [Object, String] ?????? 어떻게 배열을 이루고 객체와 문자열이 선언되는지
      required: Boolean
    } */
    to: {
      type: [Object, String],
      required: true,
    },
    /* [key: String]: {
      type: String
      required: Boolean
    } */
    navText: {
      type: String,
      required: true,
    },
  },
  /* data, 함수 형이며 객체 반환하고 키는 현 컴포넌트 사용 가능 */
  data() {
    /* {
      [key: string]: Boolean
    } */
    return {
      isExpanded: false,
    };
  },
};
</script>
