<template>
        <div class="container">
          <hr class="my-0">
            <div class="row navbar my-0 py-0">
                <div class="col-md-2">
                    <div class="logo">
                        <a href="/" >
                            <img src="../img/agentlik.png" @click="Home"  class="img-fluid" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-10">
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle h5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Faoliyat
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Korrupsiyaga qarshi kurashish bo'yicha bosh mutaxasis</a>
                            <a class="dropdown-item" href="#">Maxsus ishlar buyicha bosh mutaxasis</a>
                            <a class="dropdown-item" href="#">Bosh Yuriskonsult</a>
                            <a class="dropdown-item" href="#">Ijro Intizomi buyicha bosh mutaxasis</a>
                            <a class="dropdown-item" href="#">Inson Resurislarini rivojlantirish va boshqarish bo'yicha bosh mutaxasis</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle h5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tuzilma
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Nazorat Taftish boshqarmasi</a>
                            <a class="dropdown-item" href="#">Gemmologiya va qimmatliklarni ekispertiza qilish boshqarmasi</a>
                            <a class="dropdown-item" href="#">Tog'-kon va affinaj korxonalarni nazorat qilish bo'limi</a>
                            <a class="dropdown-item" href="#">Markaziy Labaratoriya</a>
                            <a class="dropdown-item" href="#">Asillik darajasini belgilash va tamg'alash bo'limi</a>
                            <a class="dropdown-item" href="#">Qimmatbaho zargarlik buyumlarini qabul qilish bo'limi</a>
                            <a class="dropdown-item" href="#">Moliya-Iqtisod bo'limi</a>
                            <a class="dropdown-item" href="#">Axborot-tahlil va monitoring bo'limi</a>
                            <a class="dropdown-item" href="#">Namangan Filiali</a>
                          </div>
                        </li>
                      </ul>
                      <form class="form-inline my-2 my-lg-0 ml-3">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </div>
                  </nav>
                </div>
            </div>
        </div>
</template>

<script>
export default {
methods:{
    Home(){
            return this.$router.push('/')
        },
}
}
</script>

<style scoped>
.logo{
  width: 80px;
}
.box-content p{
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 30px;
    
}
.box-content span {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 30px;
}

.icon {
  height: 50px;
  width: 50px;
   
}
</style>