<template>
  <div class="container-fluid pt-5 px-5 my-5">
    <div class="row mt-5">
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