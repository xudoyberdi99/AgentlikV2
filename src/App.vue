<template>
  <vaqtincha/>
    <Headers />
    <LogoArea />
    <RouterView />
    <Footers />
  <button v-if="shouldShowScrollButton" class="btn btn-primary btn-lg btn-floating-top"
          type="text" @click="backToTop">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
import Headers from "@/layout/Headers.vue";
import  Footers  from './layout/Footers.vue';
import { LogoArea } from './components';
import vaqtincha from "@/components/vaqtincha.vue";


export default {
  data() {
    return {
      shouldShowScrollButton: false,
    };
  },
components:{
  Headers,
  Footers,
  LogoArea,
  vaqtincha
},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll() {
      this.shouldShowScrollButton = window.scrollY > 200;
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family:sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btn-floating-top {
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 40px;
  background-color: #2F80ED;
}
</style>