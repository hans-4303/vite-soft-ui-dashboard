<template>
  <div class="form-check form-switch">
    <!-- props 값 입력, 단 :prop으로 바인딩해서 사용 -->
    <input
      :id="id"
      class="form-check-input"
      :class="inputClass"
      type="checkbox"
      :name="name"
      :checked="checked"
    />
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>

<!-- 컴포넌트 정의하는 스크립트 단 -->
<script>
export default {
  /* 고유 이름 */
  name: "VsudSwitch",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default: string | number | ...;
    } */
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    checked: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: ""
    },
  },
};
</script>
