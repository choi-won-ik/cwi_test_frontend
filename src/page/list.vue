<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm" style="background-color: purple;">
    <div class="lh-1">
      <h1 class="h6 mb-0 text-white lh-1">개시글</h1>
      
    </div>
  </div>

  <div class="my-3 p-3 bg-body rounded shadow-sm">
    <RouterLink style="align-items: center;" class="d-flex text-body-secondary pt-3">
      <div style="display: flex; width: 30px; justify-content: center; align-items: center;" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">   
        <div style="size: 16px;" >1</div></div>
      <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div class="d-flex justify-content-between">
          <strong class="text-gray-dark">개시글 이름</strong>
          <a href="#">댓글 수</a>
        </div>
        <span class="d-block">작성자</span>
      </div>
    </RouterLink>
    
  </div>
</template>

<style lang="scss" scoped>

</style>