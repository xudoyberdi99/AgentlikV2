<template>
  <div class="container w-25 mt-5">   
    <form @submit.prevent class="form">
      
      <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>

        <input type="text" class="form-control mt-2"  placeholder="email" v-model="username"> 
        <input type="password" class="form-control mt-2"  placeholder="password" v-model="password"> 
        <Button type="submit" :disabled="isloading" @click="submitHandler">Sign in</Button>
     </form>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'
import ValidationError from './ValidationError.vue';
export default {
  
  components:{
    ValidationError,
  },
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
   async submitHandler(){
      const data={
        username:this.username,
        password:this.password,
      }
      this.$store
        .dispatch('login',data)
        .then (user => {
          console.log('USER',user)
          this.$router.push({name:'admin'})
        })
        .catch(err => console.log('ERROR',err))
     }

  },
  computed: {
    ...mapState({
        isloading: state => state.auth.isloading,
        validationErrors: state =>state.auth.errors,
    }),
    
  },
}
</script>
  
<style scoped>

</style>