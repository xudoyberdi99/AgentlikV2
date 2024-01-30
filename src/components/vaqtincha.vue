<template>
  <div class="container-fluid box">
    <h5 class="mb-0 fw-bold text-center text">Sayt test rejimida ishlamoqda</h5>
    <hr class="mt-0">
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.box {
  background-color: #c59e3a;

}
.text {
  animation-duration: 20s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes slidein {
  from {
    margin-left: 80%;
    width: 100%;
  }

  to {
    margin-left: -80%;
    width: 100%;
  }
}
</style>