<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <div class="card-item px-0">
          <img src="@/img/image1.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugiat illo, magnam obcaecati odit veritatis.</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image2.png"
               class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.r sit amet, consectetur adipisicing elit. Architecto eaque esse in ipsum nulla pariatur quam reprehenderit vitae?</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image3.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons "><p class="fw-bold text-center">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, earum impedit iure non possimus voluptatibus!</p>
            <div class="bottom clearfix">
              <button @click="$router.push('#')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item px-0">
          <img src="@/img/image1.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugiat illo, magnam obcaecati odit veritatis.</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image2.png"
               class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing drg edgrd wgw ergreg qwfdewf elit. Asicing elit. Architecto eaque esse in ipsum nulla pariatur quam reprehenderit vitae?</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image3.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons "><p class="fw-bold text-center">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, earum impedit iure non possimus voluptatibus!</p>
            <div class="bottom clearfix">
              <button @click="$router.push('#')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item px-0">
          <img src="@/img/image1.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugiat illo, magnam obcaecati odit veritatis.</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image2.png"
               class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eaque esse in ipsum nulla pariatur quam reprehenderit vitae?</p>
            <div class="bottom clearfix">
              <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
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
      <div class="col-md-4">
        <div class="card-item">
          <img src="@/img/image3.jpg" class="image">
          <div style="padding: 14px;">
            <button @click="$router.push('news-detail/1')" class="buttons "><p class="fw-bold text-center">siz doim
              etiborimizdasiz
              aziz bolajonlar</p></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, earum impedit iure non possimus voluptatibus!</p>
            <div class="bottom clearfix">
              <button @click="$router.push('#')" class="buttons">To'liq o'qish <span class="time"><i
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
.times {
  margin-left: 5px;
}

.time {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.bottom {
  margin-top: 13px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.card-item {
  background-color: #F6F9F8;
  border-radius: 20px;
  width: 400px;
  margin-bottom: 30px;
}

.image {
  width: 100%;
  display: block;
  border-radius: 20px;
  height: 250px;
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

</style>