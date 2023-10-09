<template>
  <div class="form-check">
    <!-- 현 컴포넌트의 prop을 :prop 바인딩 -->
    <input :id="id" class="form-check-input" type="checkbox" :name="name" :checked="checked" />
    <label :for="id" class="custom-control-label">
      <!-- slot 아울렛, 상위 슬롯 아이템 받아서 출력 -->
      <slot />
    </label>
  </div>
</template>

<!-- 컴포넌트 선언 하는 스크립트 단 -->
<script>
export default {
  /* 고유 이름 */
  name: "VsudCheckbox",
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
