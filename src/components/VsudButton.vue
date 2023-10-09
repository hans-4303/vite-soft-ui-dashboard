/* eslint-disable prettier/prettier */
<template>
  <!-- :prop 바인딩, 함수 호출한 뒤 반환되는 문자열 대입 -->
  <button class="btn mb-0" :class="getClasses(variant, color, size, fullWidth, active)">
    <!-- slot 아울렛, 슬롯 아이템 출력 -->
    <slot />
  </button>
</template>

<!-- 컴포넌트 정의 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudButton",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    color: {
      type: String,
      default: "info",
    },
    size: {
      type: String,
      default: "md",
    },
    variant: {
      type: String,
      default: "fill",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  /* 컴포넌트 자체 메소드 */
  methods: {
    /* getClasses(variant: string | undefined, color: string | undefined, size: string | undefined, fullWidth: boolean | undefined, active: boolean | undefined ) => string; */
    getClasses: (variant, color, size, fullWidth, active) => {
      /* 값 대입할 수 있도록 변수 지정 */
      let colorValue, sizeValue, fullWidthValue, activeValue;

      /* variant와 color 지정 */
      // Setting the button variant and color
      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else if (variant === "outline") {
        colorValue = `btn-outline-${color}`;
      } else {
        colorValue = `btn-${color}`;
      }

      /* 사이즈 삼항 연산 */
      sizeValue = size ? `btn-${size}` : null;

      /* 최대 너비 삼항 연산 */
      fullWidthValue = fullWidth ? `w-100` : null;

      /* 액티브 삼항 연산 */
      activeValue = active ? `active` : null;

      /* 문자열 리턴해서 :class에 대입함 */
      return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
    },
  },
};
</script>
