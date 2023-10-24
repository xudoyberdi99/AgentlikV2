<template>

    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-5">
          <h1 class="fw-bold">Bizning institutimizga xush kelibsiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa id
            neque officiis perspiciatis, quasi suscipit tempora tenetur. Autem
            dicta incidunt sapiente similique voluptate. Cupiditate deleniti
          </p>

          <button
              @click="$router.push('about')"
              style="
              background-color: #fdc800;
              color: black;
              width: 150px;
              border-radius: 5px;
              border: none;
              margin-top: 10px;
              padding: 12px 20px;
            "
              class="btn btn-success fw-bold"
          >
            Batafsil
          </button>
        </div>
        <div class="col-md-7">
          <img
              src="../img/img.jfif"
              alt="kun rasmi"
              class="images"
          />
        </div>
      </div>
    </div>

</template>

<script>

export default {
  components:{
    
  },
  data(){
    return {
      visible:false,
    }
  },
  methods: {
    change(){
      this.visible=true
    },
  },
   
}
</script>

<style scoped>
.images{
  width: 100%;
}
</style>