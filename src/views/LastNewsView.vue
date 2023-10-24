<template>
  <div class="container-fluid pt-5 px-5 my-5">
    <div class="row mt-5">
      <div class="col-md-9">
        <LastNews></LastNews>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import LastNews from "@/components/AllNews.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {Aside, LastNews}

}
</script>

<style scoped>

</style>