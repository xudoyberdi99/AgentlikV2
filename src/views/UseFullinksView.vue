<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-9">
        <AllUsefulLinks></AllUsefulLinks>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import AllUsefulLinks from "@/components/AllUsefulLinks.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {Aside, AllUsefulLinks}

}
</script>

<style scoped>

</style>