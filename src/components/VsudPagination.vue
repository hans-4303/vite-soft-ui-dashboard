<template>
  <!-- :class prop 바인딩 따라 함수 호출 -->
  <ul class="pagination" :class="getClasses(color, size)">
    <slot />
  </ul>
</template>

<!-- 컴포넌트 정의 하는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudPagination",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
  },
  /* 현 컴포넌트 자체 메서드 */
  methods: {
    /* getClasses, color와 size 파라미터 및 문자열 반환

    즉 getClasses(color, size): string;
    그런데 메서드에서는 color, size 어떻게 처리해주지? */
    getClasses: (color, size) => {
      /* 변수 선언 */
      let colorValue, sizeValue;

      /* 삼항 연산하고 조건부 prop 대입 */
      colorValue = color ? `pagination-${color}` : null;
      sizeValue = size ? `pagination-${size}` : null;

      /* 문자열 반환 */
      return `${colorValue} ${sizeValue}`;
    },
  },
};
</script>
