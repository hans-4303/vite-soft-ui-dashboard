<template>
  <nav aria-label="breadcrumb">
    <!-- 기본 class + :class
    :class는 store === vuex에 접근해 삼항 연산자 -->
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="$store.state.isRTL ? '' : ' me-sm-6'"
    >
      <li class="text-sm breadcrumb-item" :class="textWhite">
        <!-- v-if, v-else
        == if(condition) {

        } else {

        } == condition ? if : else -->
        <a
          v-if="$store.state.isRTL"
          :class="textWhite"
          class="opacity-5 ps-2"
          href="#"
          >لوحات القيادة</a
        >
        <a v-else :class="textWhite" class="opacity-8" href="#">Pages</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="textWhite ? 'text-white' : 'text-dark'"
        aria-current="page"
      >
        <!-- currentPage prop, required 확인 -->
        {{ currentPage }}
      </li>
    </ol>
    <h6 class="mb-0 font-weight-bolder" :class="textWhite ? 'text-white' : ''">
      <!-- currentPage prop, required 확인 -->
      {{ currentPage }}
    </h6>
  </nav>
</template>

<!-- 컴포넌트 선언 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "BreadcrumbsComponent",
  /* props */
  props: {
    /* [key: String]: {
      required: boolean,
      type: String | Number | Boolean | Function,
      default: String | Number | Boolean | Function,
    } */
    currentPage: {
      required: true,
      type: String,
      default: "",
    },
    textWhite: {
      type: String,
      default: "",
    },
  },
};
</script>
