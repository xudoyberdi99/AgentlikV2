<template>
  <div class="container-fluid px-5 pt-5 my-5">
    <div class="row my-5">
      <div class="col-md-9 px-5">
        <NewsDetail></NewsDetail>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import NewsDetail from "@/components/NewsDetail.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, NewsDetail}
}
</script>
<style>

</style>