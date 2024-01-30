<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-4 groups-item">
        <h4 class="fw-bold">Bizning interaktiv xizmatlardan foydalaning</h4>
<!--        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio dolores eum neque-->
<!--          nihil numquam sed sit suscipit tenetur voluptatibus.</p>-->
        <div style="width: 180px;">
          <button
                  style="background-color: #FDC800; color: black; border-radius: 5px; border:none;margin-top: 10px; padding: 10px; margin-top: 100px;"
                  class="btn btn-success">Barcha Xizmatlar
          </button>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row groups">
          <div class="col-md-4 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help5_q4QkrdL.png" alt="">
            <p class="title">Korrupsiyaga qarshi kurashish</p>
            <p class="text">Korrupsion omillar haqida xabarlar uchun</p>
            <a class="links" href="https://t.me/Sardor_0370" target="_blank">Kirish <span><i
                class="fa fa-arrow-right"
                aria-hidden="true"></i></span></a>
          </div>
          <div class="col-md-4 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help6.png" alt="">
            <p class="title">Rahbar vertual qabulxonasi</p>
            <p class="text">Barcha turdagi savollar va takliflar uchun</p>
            <a class="links" href="https://t.me/dadni_info" target="_blank">Kirish <span><i
                class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
          </div>
          <div class="col-md-4 groups-item">
            <img src="https://api.mf.uz/media/interactive_services/help1_Cr6EqxB_1tczXMX.png" alt="">
            <p class="title">Telegram kanal </p>
            <p class="text">Kunlik qiziqarli ma'lumotlarimiz uchun </p>
            <a class="links" href="https://t.me/dadni_info" target="_blank">Kirish <span><i
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
  height: 100px;
}
.text:hover {
  color: white;
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
  background-color: #2E54DAFF;
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
  height: 35px;
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