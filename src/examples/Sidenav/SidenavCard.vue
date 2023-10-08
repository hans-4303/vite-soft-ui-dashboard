<template>
  <div id="sidenavCard" class="shadow-none card card-background card-background-mask-secondary">
    <!-- 컴포넌트 써야 할 경우 {}를 열고 사용함, == 리액트 ${} -->
    <div class="full-background" :style="{ 'background-image': 'url(' + imgWhiteCurved + ')' }"></div>
    <div class="p-3 card-body text-start w-100">
      <div
        class="mb-3 text-center bg-white shadow icon icon-shape icon-sm d-flex align-items-center justify-content-center border-radius-md"
      >
        <!-- props 활용 -->
        <i
          id="sidenavCardIcon"
          class="top-0 text-lg text-dark text-gradient"
          aria-hidden="true"
          :class="iconClass"
        ></i>
      </div>
      <!-- store === vuex state 따라 조건부 렌더링 == condition ? true : false -->
      <div v-if="$store.state.isRTL" class="docs-info">
        <h6 class="mb-0 text-white up text-end">تحتاج مساعدة ؟</h6>
        <p class="text-xs font-weight-bold text-end">يرجى التحقق من مستنداتنا</p>
        <a :href="href" target="_blank" class="mb-0 btn btn-white btn-sm w-100">توثيق</a>
      </div>
      <div v-else class="docs-info">
        <!-- props 활용, 데이터를 본문에 노출 시 {{}}로 감싸는 걸로 보임 -->
        <h6 class="mb-0 text-white up">{{ textPrimary }}</h6>
        <p class="text-xs font-weight-bold">{{ textSecondary }}</p>
        <a :href="href" target="_blank" class="mb-0 btn btn-white btn-sm w-100">{{ linkText }}</a>
      </div>
    </div>
  </div>
</template>

<!-- 컴포넌트 호출 및 선언하는 스크립트 단 -->
<script>
/* 이미지 호출 */
import imgWhiteCurved from "../../assets/img/curved-images/white-curved.jpeg";
/* 상위 컴포넌트 정의 */
export default {
  /* 고유 name */
  name: "SidenavCard",
  /* props 정의 */
  props: {
    /* [key: String]: {
      type: String;
      default: String;
    } */
    textPrimary: {
      type: String,
      default: ""
    },
    textSecondary: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    linkText: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
  },
  /* data, 함수 형이며 객체를 반환하고 키는 컴포넌트에서 활용 가능 */
  data() {
    return {
      /* ES6 문법 */
      imgWhiteCurved,
    };
  },
};
</script>
