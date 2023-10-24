<template>
<!--    <TopBar />-->
  <Headers />
    <LogoArea />
<!--    <MainMenu />-->
<!--    <Navbar />-->
    <RouterView />
    <Footers />
</template>

<script>
import Headers from "@/layout/Headers.vue";
import {Navbar} from '@/components'
import {TopBar} from '@/components'
import { Footers } from './components';
import { LogoArea } from './components';
import {MainMenu} from './components'


export default {
components:{
  Headers,
  Navbar,
  TopBar,
  Footers,
  LogoArea,
  MainMenu,

},
}
</script>

<style>

</style>