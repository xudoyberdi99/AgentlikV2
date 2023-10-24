<template>
  <div class="container-fluid mt-5 mb-5 px-5">
    <div class="row">
      <div class="col-3">
        <h2 class="fw-bold">Hamkorlarimiz</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque ducimus optio quidem rem voluptas. A aliquam corporis dolore dolores,
          ducimus explicabo in labore necessitatibus quasi qui tempore vero?
        </p>
      </div>
      <div class="col-9">
        <div id="carouselExam1" data-ride="carousel"  class="carousel slide" data-pause="false" >
          <div class="carousel-inner" >
            <div class="carousel-item active" data-interval="3000">
              <div class="row d-flex" style="justify-content: space-around; ">
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                <div class="box">
                  <img class="logo-lg" src="@/img/logo.svg"
                       alt="UniversalBank">
                </div>
              </div>
              </div>
            </div>
            <div class="carousel-item " data-interval="3000">
              <div class="row d-flex" style="justify-content: space-around; ">
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                <div class="box">
                  <img class="logo-lg" src="@/img/logo.svg"
                       alt="UniversalBank">
                </div>
              </div>
              </div>
            </div>
            <div class="carousel-item " data-interval="3000">
              <div class="row d-flex" style="justify-content: space-around; ">
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
                <div class="col-4 ">
                  <div class="box">
                    <img class="logo-lg" src="@/img/logo.svg"
                         alt="UniversalBank">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#"  data-target="#carouselExam1" data-slide="prev">
            <span class="carousel-control-prev-icon" ></span>
          </a>
          <a class="carousel-control-next" href="#" data-target="#carouselExam1" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-lg {
  text-align: center;
  display: block;
  width: 70%;
  height: 130px;
  margin: 0 auto;
}

.box {
  border-radius: 20px;
  background-color: #f6f9f8;
  //background-color: #339a77;
  margin-top: 15px;
}
.container-fluid{
  margin: 100px 0px!important;
}

</style>