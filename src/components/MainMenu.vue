<template>
  <section class="main-menu">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="main-menu-box">
                    <div class="menu-box d-flex justify-content-center">
                        <ul class="nav menu-nav" style="display: flex; justify-content: center; align-items: center;">
                            <li class="nav-item  active"><RouterLink class="nav-link" :to="{name:'home'}">Bosh sahifa</RouterLink></li>
                            <li class="nav-item dropdown">
                                <RouterLink class="nav-link"  :to="{name:'documents'}">Moliya-iqtisod</RouterLink>
                            </li>
<!--                            <li class="nav-item dropdown"><a class="nav-link" href="/teacher">Axborot-tahlil va monitoring bo'limi </a></li>-->
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'news'}">Axborot-tahlil va monitoring</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'news'}">Korrupsiyaga qarshi kurashish</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'achievements'}">Maxsus ishlar</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'price'}">Inson resurislarini rivojlantirish va boshqarish</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Yuriskonsult</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">ijro intizomi</RouterLink></li>
                              <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Namangan filiali</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Gemologiya va qimmatliklarni ekspertiza qilish</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Tog'-kon va affinaj korxonalar nazorati</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Markaziy labaratoriya</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Asillik darajasini belgilash va tamg'alash</RouterLink></li>
                            <li class="nav-item "><RouterLink class="nav-link" :to="{name:'bams'}">Qimmatbaho zargarlik buyumlari</RouterLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
components:{
   
}
}
</script>

<style scoped>
.main-menu-box {
    background-color: #29c5fd;
    position: relative;
    z-index: 111;
}
.menu-box {
    position: absolute;
    width: 100%;
    top: -20px;
    left: 0px;
    padding: 0px 10px;
    background: rgb(41, 197, 253);
    border-radius: 5px;
   
}
.main-menu-box .menu-box .menu-nav .nav-link {
    font-size: 14px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 500;
    padding: 18px 25px 15px 0px;

}
.main-menu-box .menu-box .menu-nav .nav-link:hover {
    color: black;
    transform: scale(1.1);
    transition: all .3s ease-in-out;
}

</style>