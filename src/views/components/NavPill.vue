<template>
  <div class="nav-wrapper position-relative end-0">
    <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link mb-0 px-0 py-1 active active"
          data-bs-toggle="tab"
          href="../../../examples/pages/account/settings.html"
          role="tab"
          aria-selected="true"
          >Messages</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link mb-0 px-0 py-1"
          data-bs-toggle="tab"
          href="../../../examples/pages/account/billing.html"
          role="tab"
          aria-selected="false"
          >Social</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link mb-0 px-0 py-1"
          data-bs-toggle="tab"
          href="../../../examples/pages/account/invoice.html"
          role="tab"
          aria-selected="false"
          >Notifications</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link mb-0 px-0 py-1"
          data-bs-toggle="tab"
          href="../../../examples/pages/account/security.html"
          role="tab"
          aria-selected="false"
          >Backup</a
        >
      </li>
    </ul>
  </div>
</template>

<!-- 함수 호출 및 컴포넌트 선언된 스크립트 단 -->
<script>
/* 함수 호출 */
import setNavPills from "@/assets/js/nav-pills.js";

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 name */
  name: "NavPill",
  /* 마운트 됐을 시 */
  mounted() {
    /* setter 호출 */
    setNavPills();
  },
};
</script>
