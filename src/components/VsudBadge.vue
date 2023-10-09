<template>
  <!-- :class prop 바인딩, 함수 호출하여 반환된 문자열 대입 -->
  <span class="badge" :class="getClasses(variant, color, size, circle, floating)">
    <slot />
  </span>
</template>

<!-- 컴포넌트 정의 하는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudBadge",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "success",
    },
    variant: {
      type: String,
      default: "fill",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    floating: {
      type: Boolean,
      default: false,
    },
  },
  /* 고유 메소드 */
  methods: {
    /* getClasses(variant: string | undefined, color: string | undefined, size: string | undefined, circle: boolean | undefined, floating: boolean | undefined ) => string; */
    getClasses: (variant, color, size, circle, floating) => {
      /* 파라미터 대입될 변수들 */
      let colorValue, sizeValue, circleValue, floatingValue;

      /* variant 따른 로직 */
      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else {
        colorValue = `badge-${color}`;
      }

      /* 사이즈 삼항 연산 */
      sizeValue = size ? `badge-${size}` : null;

      /* 원형 삼항 연산 */
      circleValue = circle ? "badge-circle" : null;

      /* 플로팅 삼항 연산 */
      floatingValue = floating ? "badge-floating" : null;

      /* 문자열 반환 */
      return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`;
    },
  },
};
</script>
