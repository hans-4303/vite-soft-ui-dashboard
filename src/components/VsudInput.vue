<template>
  <!-- :prop 바인딩, 메소드 호출 -->
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <!-- 현 컴포넌트 prop 사용하기 때문에 :prop 바인딩 -->
      <input
        :id="id"
        :type="type"
        class="form-control"
        :class="getClasses(size, valid)"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :isRequired="isRequired"
      />
      <!-- 현 컴포넌트 prop 따라 v-if 처리 -->
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>

<!-- 컴포넌트 정의하는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudInput",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
    } */
    size: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ""
    },
    iconDir: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    isRequired: Boolean,
  },
  /* 컴포넌트 자체 메소드 */
  methods: {
    /* getClasses(size: string | undefined, valid: boolean | undefined) => string; */
    getClasses: (size, valid) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue}`;
    },
    /* getIcon(icon: string | undefined) => void */
    getIcon: (icon) => (icon ? icon : null),
    /* hasIcon(icon: string | undefined) => void */
    hasIcon: (icon) => (icon ? "input-group" : null),
  },
};
</script>
