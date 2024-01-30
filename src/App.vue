<template>
  <vaqtincha/>
    <Headers />
    <LogoArea />
    <RouterView />
    <Footers />
</template>

<script>
import Headers from "@/layout/Headers.vue";
import  Footers  from './layout/Footers.vue';
import { LogoArea } from './components';
import vaqtincha from "@/components/vaqtincha.vue";


export default {
components:{
  Headers,
  Footers,
  LogoArea,
  vaqtincha
},
}
</script>

<style>

</style>