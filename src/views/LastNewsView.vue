<template>
  <div class="container mt-5 mb-5">
    <div class="row">
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