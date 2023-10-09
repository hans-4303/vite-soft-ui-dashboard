<template>
  <!-- label, textarea 작성하고 :prop 전달 -->
  <div class="form-group">
    <label :for="exampleFormControlTextarea1">
      <!--
      <slot />
      부모 컴포넌트가 제공한 슬롯 컨텐츠(== 리액트의 children)가
      렌더링 되어야 하는 위치를 나타내는 슬롯 아울렛(outlet)
      -->
      <slot />
    </label>
    <textarea
      :id="exampleFormControlTextarea1"
      class="form-control"
      rows="5"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<!-- 컴포넌트 정의 하는 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "VsudTextarea",
  /* props 정의 */
  props: {
    /* [key: string]: StringConstructor | ... | {
      type: StringConstructor | ...;
      default: string | ...;
    } */
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
