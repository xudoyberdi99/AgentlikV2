<template>
  <div class="container my-5 py-5">
    <div class="row">
      <div class="col-md-12">
        <h2 class="fw-bold text-center mb-4">Hamkorlarimiz</h2>
      </div>
      <div class="col-md-12">
        <Carousel :autoplay="2000"  :breakpoints="breakpoints"  :wrap-around="true" :touchDrag="false">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
              <div class="box">
                <img class="logo-lg" src="https://www.imv.uz/_nuxt/img/logo-uz.62ef643.png"
                     alt="UniversalBank">
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  data(){
    return{
      breakpoints:{
        1024: {
          itemsToShow: 3,
          snapAlign: "start"
        },
        500:{
          itemsToShow: 1,
          snapAlign: "center"
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center"
        },
      }
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style scoped>
.logo-lg {
  text-align: center;
  display: block;
  width: 70%;
  height: 130px;
  margin: 0 auto;
}
.box {
  border-radius: 20px;
  background-color: #f6f9f8;
  margin: 10px 20px;
}
</style>