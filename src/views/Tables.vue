<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
</template>

<!-- 컴포넌트 호출 및 선언하는 script 단 -->
<script>
/* 컴포넌트 호출 */
import AuthorsTable from "./components/AuthorsTable.vue";
import ProjectsTable from "./components/ProjectsTable.vue";

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 이름 */
  name: "TablesPage",
  /* 호출할 하위 컴포넌트들 */
  components: {
    AuthorsTable,
    ProjectsTable,
  },
};
</script>
