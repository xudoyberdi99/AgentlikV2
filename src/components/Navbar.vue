<template>
  <section v-show="visible" id="navbar" class="sticky-menu sticky" v-on:scroll="handleScroll">
        <div class="container-fluid">
            <div class="row m-1">
                <div class="col-md-1">
                    <div class="logo">
                     <div>
                            <a href="/"><img src="@/img/agentlik.png" alt="logo" @click="Home" style="width: 80px;"></a>
                        </div>
                    </div>
                </div>         
                <div class="col-md-11">
                    <div class="menu-box d-flex justify-content-center">
                        <ul class="nav menu-nav" style="display: flex; justify-content: center; align-items: center;">
                          <li class="nav-item  active"><RouterLink class="nav-link" :to="{name:'home'}">Bosh sahifa</RouterLink></li>
                          <li class="nav-item ">
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
    </section>
   
   
</template>

<script>
import {mapGetters} from 'vuex'
import {gettersTypes} from '@/modules/types'
export default {
    data() {
    return {
      visible: false
    }
  },
    methods: {
        Home(){
            return this.$router.push('/')
        },
        handleScroll (event){
        this.visible = window.scrollY > 250 ? true : false
    },
        
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
        },
    computed:{
        ...mapGetters({
            currentUser: gettersTypes.currentUser,
            isLoggedIn:  gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous,
        }),
    },
}
</script>

<style scoped>
.nav-item {
    font-size: 14px;
    font-weight:500;
    text-transform: uppercase;
}
.nav-link {
    color: black;
  padding: 8px 12px;
}
.nav-link:hover{
    color:green;

}
.sticky-menu {
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 11;
    animation: 300ms ease-in-out 0s 1 normal none running fadeInDown;
    background: rgb(255, 255, 255);
    height: 120px;
    padding-top: 18px;
    box-shadow: rgb(34 34 34) 0px 0px 20px -10px;
  transition: all 10s linear;

}
.sticky {
    display: block;

}
</style>