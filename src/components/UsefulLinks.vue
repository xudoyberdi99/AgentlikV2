<template>
  <div class="container-fluid py-5" style="background-color: #f6f9f8;">
  <div class="container mb-5">
    <div class="row  mb-5 pb-5">
      <div class="d-flex justify-content-between">
        <div class="col-md-6">
          <h2>Foydali Havolalar</h2>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-8"></div>
            <div class="col-4">
              <button
                  @click="$router.push('usefullinks')"
                  style="
              background-color: #fdc800;
              color: black;
              width: 150px;
              border-radius: 5px;
              border: none;
              padding: 12px 20px;
              font-weight: bold;
              font-size: 20px;
            "
                  class="btn btn-success fw-bold"
              >
                Barchasi
              </button>
            </div>
          </div>


        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-md-4 links">
        <a href="https://my.gov.uz/oz"  target="_blank">
          <div class="box">
            <img src="https://api.mf.uz/media/usefullink/logos/logo_1.png"  class="images1" alt="">
            <p class="text">
              Yagona interaktiv davlat xizmatlari portali
            </p>
          </div>
        </a>
      </div>
      <div class="col-md-4 links">
        <a href="https://www.gov.uz/" target="_blank">
          <div class="box">
            <img src="https://api.mf.uz/media/usefullink/logos/spravochnik_fpyh7Gg.png"  class="images1" alt="">
            <p class="text">
              O'zbekiston Respublikasi hukumat portali
            </p>
          </div>
        </a>
      </div>
      <div class="col-md-4 links">
        <a href="https://www.imv.uz/" target="_blank">
          <div class="box">
            <img src="../img/gerb1.jpg"  class="images1" alt="">
            <p class="text">

              Iqtisodiyot va moliya vazirligi
            </p>
          </div>
        </a>
      </div>

    </div>
  </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.btn:hover {
  transform: scale(1.1);
  transition: all .4s linear;
}
.box {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px 24px 24px;
    background: #fff;
    box-shadow: 0 0 12px 3px rgba(56,56,56,.05);
    border-radius: 3px;
    height: 150px;
    margin: 0px 10px;
}
.images1 {
  position: absolute;
  width: 80px;
  height: 80px;
  top: -50px;
}
.text {
  margin-top: 20px;
}
a {
  text-decoration: none;
  font-size: 18px;
  color: #383636;
  font-weight: bold;
}
.links:hover {
  transform: scale(1.1);
  transition: all .4s linear;
}
</style>