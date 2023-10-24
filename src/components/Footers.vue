<template>
  <footer class="footer1">
    <div class="container-fluid px-5">
        <div class="row">
            <div class="col-md-3">
                <div class="footer-logo-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque enim, harum illo quis tempora ullam voluptatem. Animi cumque, est excepturi laborum quod vel.
                    </p>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-map-marker mr-2 text-success"></i>Minor metro ro'parasi</li>
                        <li><i class="fas fa-envelope mr-2 text-success"></i>testlar@gmail.com</li>
                        <li><i class="fas fa-phone mr-2 text-success"></i>+99 898 875 7678</li>
                    </ul>
                </div>
            </div>

          <div class="col-md-6">
            <div class="f-links" style="display: flex; justify-content: center;">
              <ul class="list-unstyled">
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i><RouterLink :to="{name:'achievements'}">Moliya-iqtisod</RouterLink></a></li>
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i><RouterLink :to="{name:'news'}">Axborot-tahlil va monitoring</RouterLink></a></li>
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i>Korrupsiyaga qarshi kurashish</a></li>
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i><RouterLink :to="{name:'courses'}">Maxsus ishlar</RouterLink></a></li>
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i><RouterLink :to="{name:'bams'}">Yuriskonsult</RouterLink></a></li>
                <li><a href="/"><i class="fas fa-angle-right mr-2"></i><RouterLink :to="{name:'bams'}">Markaziy labaratoriya</RouterLink></a></li>
              </ul>
            </div>
          </div>
            <div class="col-md-3">
                <div style="position:relative;overflow:hidden; border-radius: 15px;">
                    <a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Toshkent</a>
                    <a href="https://yandex.uz/maps/geo/1543141251/?ll=69.273915%2C41.298152&rl=69.291834%2C41.340352&utm_medium=mapframe&utm_source=maps&z=15.4" style="color:#eee;font-size:12px;position:absolute;top:14px;">Oybek metro bekati — Yandex Xarita</a>
                    <iframe src="https://yandex.uz/map-widget/v1/?ll=69.273915%2C41.298152&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMjUxEkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBPyrt6YmVraXN0b24geW%2FKu25hbGlzaGksIE95YmVrIG1ldHJvIGJla2F0aSIKDT6MikIVTjElQg%3D%3D&rl=69.291834%2C41.340352&z=15.4" width="600" height="260" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                </div>
            </div>
        </div>
        </div>
    </footer>
<section class="copyright-area">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
        <div class="copy-text"></div>
            </div>
                <div class="text-right col-md-6">
                    <ul class="social list-unstyled list-inline">
                        <li class="list-inline-item">
                            <a href="/"><i class="fab fa-facebook-f item"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/"><i class="fab fa-telegram item"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/"><i class="fab fa-instagram item"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <button type="text" @click="backToTop">
                            <i class="fas fa-arrow-up item"></i></button>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        
</section>
</template>

<script>    
export default {
    name:'Footer',
    components:{
        
    },
    data(){
        return {
        }
    },
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
    background-color: rgb(24,43,73);
    color:#ccc;
    padding: 40px 10px;
}
.list-unstyled li {
    padding-top: 20px;
}
.copyright-area{
    background-color: #122340;
}
.item{
    margin-right: 20px;
    margin-left: 20px;
    color: green;
}

</style>