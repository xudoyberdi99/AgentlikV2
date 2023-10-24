<template>
    <footer class="footer1">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="footer-logo-info">
                        <p class="fw-bold fs-4">Bog'lanish</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-phone mr-2 "></i> Telefon:+998 98 875 7678</li>
                            <li><i class="fas fa-fax mr-2 "></i> Faks:(8 371) 234-11-48  </li>
                            <li><i class="fas fa-envelope mr-2 "></i> Email: testlar@gmail.com</li>
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
                                    href="#!"
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
                            <p>100000 Toshkent Shahri A.Temur kuchasi 60A</p>
                            </li>
                            <li class="buss"><i class="fa fa-bus"></i> Jamoat Transportlari
                                <p>100,200,43,44,45,56,78,89</p>
                            </li>
                            <li>
                                <div style="position:relative;overflow:hidden; border-radius: 10px;">
                                    <a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Toshkent</a>
                                    <a href="https://yandex.uz/maps/geo/1543141251/?ll=69.273915%2C41.298152&rl=69.291834%2C41.340352&utm_medium=mapframe&utm_source=maps&z=15.4" style="color:#eee;font-size:12px;position:absolute;top:14px;">Oybek metro bekati — Yandex Xarita</a>
                                    <iframe src="https://yandex.uz/map-widget/v1/?ll=69.273915%2C41.298152&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMjUxEkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBPyrt6YmVraXN0b24geW%2FKu25hbGlzaGksIE95YmVrIG1ldHJvIGJla2F0aSIKDT6MikIVTjElQg%3D%3D&rl=69.291834%2C41.340352&z=15.4" width="600" height="223" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
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
    margin-left: 1260px;
    margin-bottom: 0;
}
</style>