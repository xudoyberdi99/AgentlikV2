<template>
    <section class="achievementsDetail">
     <div v-if='isloading' class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
    <AchievementsDetail v-else />
  </section>
  
  </template>
  
  <script>
  import { AchievementsDetail } from "../components";
  import { mapState } from "vuex";
  export default {
    components:{
      AchievementsDetail,
    },
  mounted(){
    this.$store.dispatch('achievementsDetail',this.$route.params.id)
  },
  computed:{
    ...mapState({
      isloading: state=>state.news.isloading,
    }),
  }
  }
  </script>
  
  <style scoped>
  .achievementsDetail {
    margin-top: 150px;
  }
  </style>