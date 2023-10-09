<template>
  <!-- :class prop 바인딩, 반환된 문자열 대입 -->
  <div
    class="alert text-white font-weight-bold"
    role="alert"
    :class="getClasses(color, dismissible)"
  >
    <span class="alert-icon">
      <!-- :class prop 바인딩, 반환된 문자열 대입 -->
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
    </span>
    <!-- 컴포넌트 prop 받아서 조건으로 사용 -->
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<!-- 컴포넌트 정의 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudAlert",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    color: {
      type: String,
      default: "success",
    },
    icon: {
      type: String,
      default: "",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  /* 자체 메소드 */
  methods: {
    /* getClasses(color: string | undefined, dismissible: boolean | undefined) => string; */
    getClasses: (color, dismissible) => {
      let colorValue, dismissibleValue;

      colorValue = color ? `alert-${color}` : null;

      dismissibleValue = dismissible ? "alert-dismissible fade show" : null;

      return `${colorValue} ${dismissibleValue}`;
    },
    /* getIcon(icon: string | undefined) => string | null; */
    getIcon: (icon) => (icon ? icon : null),
  },
};
</script>
