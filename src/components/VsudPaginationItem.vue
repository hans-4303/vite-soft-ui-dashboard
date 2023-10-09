<template>
  <!-- :class prop, 함수도 따옴표로 지정하고 인수 괄호 넣기 -->
  <li class="page-item" :class="getClasses(active, disabled)">
    <a class="page-link" href="javascript:;">
      <!-- prev 혹은 next 존재한다면 null, 둘 다 없다면 label -->
      {{ prev || next ? null : label }}
      <i v-if="prev" class="fa fa-angle-left"></i>
      <i v-if="next" class="fa fa-angle-right"></i>
    </a>
  </li>
</template>

<!-- 컴포넌트 정의 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudPaginationItem",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    label: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    prev: {
      type: Boolean,
      default: false,
    },
    next: {
      type: Boolean,
      default: false,
    },
  },
  /* 호출마다 작동하는 메소드 */
  methods: {
    /* getter 형식으로 active, disabled 파라미터 받음 */
    getClasses: (active, disabled) => {
      /* 변수 선언 */
      let activeValue, disabledValue;

      /* 변수에 따라 삼항 연산 */
      activeValue = active ? "active" : null;
      disabledValue = disabled ? "disabled" : null;

      /* 조건에 따라 :class prop을 동적으로 */
      return `${activeValue} ${disabledValue}`;
    },
  },
};
</script>
