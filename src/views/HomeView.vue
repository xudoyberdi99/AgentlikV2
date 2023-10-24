<template>
    <Slide />
<InteractivService />
  <LastNews />
  <UsefullLinks />
  <Partners />
</template>

<script>
import { Slide } from '../components';
import {AboutUs} from '../components'
import {Partners} from '../components'
import {InteractivService} from "../components";
import {LastNews} from "../components";
import {UsefullLinks} from "../components";

export default {
components:{
  Slide,
  AboutUs,
  Partners,
  InteractivService,
  LastNews,
  UsefullLinks
}
}
</script>

<style scoped>


</style>