<template>
  <div class="container-fluid box">
    <Carousel :autoplay="2000" :wrap-around="true" :touchDrag="false">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item"><p class="text">Sayt test rejimida ishlamoqda</p></div>
      </Slide>
    </Carousel>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<style scoped>
.box {
  background-color: #c59e3a;
}
.text {
  margin-bottom: 0;
  font-weight: bold;
  font-size: 20px;
}
</style>