<template>
  <div class="container my-5 pt-5">
    <div class="row">
      <div class="col-md-4 groups-item">
        <h4 class="fw-bold"> So'ngi xabarlar</h4>
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Alias aliquid animi aspernatur beatae culpa dolore ea eligendi eum in, itaque iure magni, maxime nam necessitatibus omnis quod repellendus sint, soluta!</p>-->
          <button
                  style="background-color: #FDC800; color: black; border-radius: 5px; border:none;margin-top: 10px;"
                  class=" buttons btn btn-success p-3 fw-bold">Barchasi
          </button>
      </div>
      <div class="col-md-8">
        <div class="row mb-5 ">
          <div class="col-md-6">
            <div class="card-item px-0">
              <img src="https://www.spot.uz/media/img/2017/12/6x9qTS15126197346055_l.jpg" class="image">
              <div style="padding: 14px;">
                <button class="buttons"><p class="fw-bold">Qimmatbaho metallar va qimmatbaho toshlar to‘g‘risida"gi Qonun</p></button>
                <p>“Qimmatbaho metallar va qimmatbaho toshlar to‘g‘risida"gi Qonun (O‘RQ-710-son, 23.08.2021 y.) Prezident tomonidan imzolandi.</p>
                <div class="bottom clearfix">
                  <button  class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-item">
              <img src="@/img/imagess.jpg" class="image">
              <div style="padding: 14px;">
                <button  class="buttons "><p class="fw-bold text-center">Asillik darajasini belgilash va tamg'alash uchun to'lov</p></button>
                <p>Zargarlik va boshqa buyumlarning  tarkibida elementlar<sup class="fw-bold">*</sup> soni 5 tadan oshsa asllik darajasini tekshirish va tamg'alash narxi ikki barobar oshadi  </p>
                <div class="bottom clearfix">
                  <button class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.time {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.times {
  margin-left: 5px;
}

.bottom {
  margin-top: 13px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.buttons {
  border: none;
  font-size: 18px;
  margin-right: auto;
  background-color: transparent;
  font-weight: bold;
}

.buttons:hover {
  color: #FDC800;
}

.image {
  width: 100%;
  display: block;
  border-radius: 20px;
  height: 300px;
  padding: 10px;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.card-item {
  background-color: #F6F9F8;
  border-radius: 20px;
  margin-bottom: 30px;
}
.btn{
  margin-top: 250px!important;
  font-weight: bold;
}
.btn:hover {
  transform: scale(1.1);
}
.groups-item{
  padding: 30px;
}
@media only screen and (max-width: 767px){
  .buttons{
    margin-top: 20px!important;
  }

}
</style>