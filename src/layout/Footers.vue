<template>
    <footer class="footer1">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="footer-logo-info">
                        <p class="fw-bold fs-4">Bog'lanish</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-phone mr-2 "></i> Telefon:+998 71 233 02 33</li>
                            <li><i class="fas fa-fax mr-2 "></i> Faks:(8 371) 233-02-33  </li>
                            <li><i class="fas fa-envelope mr-2 "></i> Email: infogppuz@gmail.com <p>Exat: dadbp@exat.uz</p>   </li>
                        </ul>

                        <p class="fw-bold fs-4 social-media">Ijtimoiy Tarmoqlar</p>
                        <ul class="social list-unstyled list-inline">
                            <li class="list-inline-item">
                                <a
                                    class="btn btn-primary btn-lg btn-floating"
                                    style="background-color: #198754;border-radius: 50%;"
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-facebook"></i
                                ></a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="btn btn-primary btn-lg btn-floating"
                                    style="background-color: #198754;border-radius: 50%;"
                                    href="https://t.me/dadni_info"
                                    role="button"
                                ><i class="fab fa-telegram"></i
                                ></a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="btn btn-primary btn-lg btn-floating"
                                    style="background-color: #198754; border-radius: 50%;"
                                    href="#!"
                                    role="button"
                                ><i class="fab fa-instagram"></i
                                ></a>
                            </li>
                          <li class="list-inline-item">
                            <a
                                class="btn btn-primary btn-lg btn-floating"
                                style="background-color: #198754; border-radius: 50%;"
                                href="#!"
                                role="button"
                            ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5">
                    <p class="fw-bold fs-4">Manzil</p>
                    <div class="f-links">
                        <ul class="list-unstyled">
                            <li><i class="fa fa-map"></i> Manzil
                            <p> Yunusobod tumani. Zarafshon 4-uy</p>
                            </li>
                            <li class="buss"><i class="fa fa-bus"></i>Jamoat Transportlari
                                <p>44,89,91,115,60,93,85,22,68,2,17
                                  ,19,24,26,38,51,67,72,97,140</p>
                            </li>
                            <li>
                                <div style="position:relative;overflow:hidden; border-radius: 10px;">
                                    <div style="width: 100%">
                                      <iframe width="500" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=tashkent%20gosudarstvennaya%20Probirnaya+(inspiksiya)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a>
                                      </iframe>
                                  </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="fw-bold fs-3">Murojaat</p>
                    <div class="input-group  mb-3 mt-4">
                        <input type="text" class="form-control mt-2" placeholder="F.I.SH" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email manzilingiz" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                        <textarea class="form-control text-area" aria-label="With textarea" placeholder="Murojaat matni"></textarea>
                    </div>
                    <button type="button" class="btn btn-success mt-4">Xabar Yuborish</button>
                </div>
            </div>
          <button class="btn btn-primary btn-lg btn-floating-top"
                  type="text" @click="backToTop">
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>

    </footer>
</template>

<script >
export default {
    name:'Footers',
    methods:{
        backToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}

</script>

<style scoped>
 .footer1{
     background-color: rgb(0,33,71);
     color:#ccc;
     padding: 80px 5px 20px;
     text-align: left!important;
 }
 .list-unstyled li {
     padding-top: 20px;
 }
 .buss{
     padding-top: 0px!important;
 }
 .form-control {
     background-color: transparent;
 }
 .text-area{
     height: 200px;
 }
 .btn-success {
     width: 100%;
 }
 .social-media{
     margin-top: 140px;
 }
.btn-floating-top {
    background-color: transparent;
    border-radius: 50%;
    //margin-left: 1260px;
    margin-bottom: 0;
}
</style>