<template>
    <Headers />
    <LogoArea />
    <RouterView />
    <Footers />
</template>

<script>
import Headers from "@/layout/Headers.vue";
import  Footers  from './layout/Footers.vue';
import { LogoArea } from './components';


export default {
components:{
  Headers,
  Footers,
  LogoArea,
},
}
</script>

<style>

</style>