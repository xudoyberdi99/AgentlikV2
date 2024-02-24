<template>
  <div class="container-fluid" style="background-color: #f6f9f8;">
    <div class="container py-5">
      <div class="row d-flex align-items-center box">
        <div class="col-md-5">
          <h1 class="fw-bold">Bizning haqimizda</h1>
          <p>
            O‘zbekiston Respublikasi Prezidentining
            2023 yil 25 yanvardagi “Respublika ijro etuvchi
            hokimiyat organlari faoliyatini samarali yo‘lga
            qo‘yishga doir birinchi navbatdagi tashkiliy
            chora-tadbirlar to‘g‘risida”gi PF-14-sonli
            Farmoniga muvofiq, O‘zbekiston Respublikasi
            Moliya vazirligi xuzuridagi Davlat asillik darajasini
            belgilash palatasi, Iqtisodiyot va moliya vazirligi
            huzuridagi Davlat asillik darajasi nazorati inspeksiyasi
            etib qayta tashkil etilgan.
          </p>

          <button
              style="
              background-color: #fdc800;
              color: black;
              width: 150px;
              border-radius: 5px;
              border: none;
              margin-top: 10px;
              padding: 12px 20px;
              font-weight: bold;
            "
              class="btn btn-success buttons fw-bold"
          >
            Batafsil
          </button>
        </div>
        <div class="col-md-7">
          <img
              src="../img/bizz.png"
              alt="kun rasmi"
              class="images"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.images {
  width: 100%;
  display: block;
  border-radius: 15px;
  height: 500px !important;
}
@media only screen and (max-width: 767px){
  .box{
    flex-direction: column-reverse;
  }
  .images {
    height: 250px!important;
  }
}
</style>