<template>
  <div class="container p-0">
    <div id="carousel1" class="carousel slide" data-ride="carousel" data-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active anim" data-interval="3000">
          <img class="d-block w-100 img-fluid " src="../img/1-_2_.jpg" alt="F">
          <div class="text">
            <p class="text3">Xush kelibsiz bizning sahifamizga</p>
            <p class="text4 text-right">Bu yerda o'zingiz uchun qiziqarli malumotlarni olasiz</p>
          </div>
        </div>
        <div class="carousel-item anim " data-interval="3000">
          <img class="d-block w-100 img-fluid" src="../img/img2.jpg" alt="S">
          <div class="text">
            <p class="text3">Xush kelibsiz bizning sahifamizga</p>
            <p class="text4 text-right">Bu yerda o'zingiz uchun qiziqarli malumotlarni olasiz</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#"  data-target="#carousel1" data-slide="prev">
        <span class="carousel-control-prev-icon" ></span>

      </a>
      <a class="carousel-control-next" href="#" data-target="#carousel1" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.text {
  position: relative;
}
.text3 {
  text-transform: uppercase;
  position: absolute;
  color: red;
  font-size: 24px;
  font-weight: bold;
  top: -550px;
  right: 100px;
}
.text4{
  text-transform: uppercase;
  position: absolute;
  color: rgb(35, 35, 204);
  font-weight: 700;
  width: 600px;
  top: -500px;
  right: 80px;
  font-size: 30px;
  
}
.anim {
  animation-name: slides;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  height: 100vh;
  
}
@keyframes slides{
  from {
    transform: scale(1);
    transition: all .4s linear;
  }to {
    transform: scale(1.1);
    transition: all 1s linear;
  }
}
</style>