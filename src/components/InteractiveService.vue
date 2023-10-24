<template>
  <div class="container-fluid mt-5 mb-5 p-5">
    <div class="row">
      <div class="col-md-3 groups-item">
        <h4 class="fw-bold">Bizning interaktiv xizmatlardan foydalaning</h4>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio dolores eum neque
          nihil numquam sed sit suscipit tenetur voluptatibus.</p>
        <div style="width: 180px;">
          <button @click="goToAboutPage"
                  style="background-color: #FDC800; color: black; border-radius: 5px; border:none;margin-top: 10px; padding: 10px;"
                  class="btn btn-success">Barcha Xizmatlar
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row groups">
          <div class="col-md-3 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help5_q4QkrdL.png" alt="">
            <p class="title">Korrupsiyaga qarshi kurashish</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
            <a class="links" href="https://t.me/Oylikbot" target="_blank">Kirish <span><i
                class="fa fa-arrow-right"
                aria-hidden="true"></i></span></a>
          </div>
          <div class="col-md-3 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help6.png" alt="">
            <p class="title">onlayn matbuot</p>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
            <a class="links" href="https://t.me/Oylikbot" target="_blank">Kirish <span><i
                class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
          </div>
          <div class="col-md-3 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help1_Cr6EqxB_1tczXMX.png" alt="">
            <p class="title">Telegram kanal "oylik" boti</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
            <a class="links" href="https://t.me/Oylikbot" target="_blank">Kirish <span><i
                class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
          </div>
          <div class="col-md-3 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help6.png" alt="">
            <p class="title">onlayn matbuot</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
            <a class="links" href="https://t.me/Oylikbot" target="_blank">Kirish <span><i
                class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToAboutPage() {
      this.$router.push("/services");
    },
  },
}
</script>

<style scoped>
.text {
  color: #6A7584;
}
.groups-item {
  padding: 30px;

  .links {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
}

.groups-item:hover {
  background-color: rgb(0, 33, 71);
  border-radius: 20px;
  color: white;

  .links {
    color: #FDC800;
  }
}
.links:hover {
  transform: scale(1.1);
}
.title {
  margin: 15px 0px;
  font-weight: bold;
}

.btn {
  font-weight: bold;
}

.btn:hover {
  color: #FDC800;
  transform: scale(1.1);
}
</style>