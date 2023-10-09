<template>
  <div class="form-check">
    <input :id="id" class="form-check-input" type="radio" :name="name" :checked="checked" />
    <label class="custom-control-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<!-- 컴포넌트 정의 하는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudRadio",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default?: string | ...;
      required?: boolean;
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
  },
};
</script>
