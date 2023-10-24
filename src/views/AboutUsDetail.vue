<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <AboutDetail></AboutDetail>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import AboutDetail from "@/components/AboutUsDetail.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: {Aside,AboutDetail}
}
</script>
<style>

</style>