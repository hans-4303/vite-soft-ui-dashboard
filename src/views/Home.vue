<template>
  <!-- 호출 -->
  <default-dashboard />
</template>

<!-- 컴포넌트를 부르고 Vue 컴포넌트를 선언하는 script 단 -->
<script>
/* 컴포넌트 호출 */
import DefaultDashboard from "@/views/dashboards/Default.vue";

export default {
  /* 고유 name 지정 */
  name: "HomePage",
  /* 컴포넌트 정의 */
  components: {
    DefaultDashboard,
  },
};
</script>
