<template>
  <!-- :class prop 바인딩, 반환 문자열 대입 -->
  <div class="avatar" :class="getSize(size)">
    <!-- 현 컴포넌트 prop을 :prop 바인딩하고 :class는 반환 문자열 대입 -->
    <img :src="img" :alt="alt" :class="[getClasses(shadow, circular, borderRadius)]" />
  </div>
</template>

<!-- 컴포넌트 정의되는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudAvatar",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    img: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    shadow: {
      type: String,
      default: ""
    },
    borderRadius: {
      type: String,
      default: ""
    },
    circular: Boolean,
  },
  /* 자체 메소드 */
  methods: {
    /* getSize(size: string | undefined) => string | null; 괄호 안 값은 리턴이라 볼 수 있음 */
    getSize: (size) => (size ? `avatar-${size}` : null),
    /* getClasses(shadow: string | undefined, circular: boolean | undefined, borderRadius: string | undefined) => string; */
    getClasses: (shadow, circular, borderRadius) => {
      /* 파라미터 받는 변수 */
      let shadowValue, circularValue, borderRadiusValue;

      /* shadow prop에 따라 삼항 연산 후 값 대입, 조건 안 맞으면 null */
      if (shadow) {
        shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
      } else {
        shadowValue = null;
      }

      /* 원형 삼항 연산 */
      circularValue = circular ? "rounded-circle" : null;

      /* 테두리 둥글기 삼항 연산 */
      borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null;

      /* 문자열 리턴 */
      return `${shadowValue} ${circularValue} ${borderRadiusValue}`;
    },
  },
};
</script>
