<template>
    <div class="header-menu container">
          <div class="address-style">
            <div class="address_name">
              <i class="fa-solid fa-map"></i><span class="font-weight-bold iconssty"> Yunusobod tumani Zarafshon 4-uy </span>
            </div>
              <div class="email_name">
                <i class="fa fa-envelope iconssty" aria-hidden="true"></i><span class="font-weight-bold iconssty"> dadbp@exat.uz, infogppuz@gmail.com </span>
              </div>
              <i class="fa-solid fa-phone iconssty" aria-hidden="true"></i><span class="font-weight-bold iconssty"> (998)71-2330233; 71-2330480 </span>
          </div>
        <div class="d-flex justify-content-between">
          <div class="language">
            <img class="w-100"  src="../img/translation.png" alt="dwd">
          </div>
          <div>
            <div class="form-group">
              <select class="form-control">
                <option>UZ</option>
                <option>RU</option>
                <option>EN</option>
                <option>KR</option>
              </select>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
name:'Headers',
    data() {
        return {
            options: [{
                value: 'Option1',
                label: 'English'
            }, {
                value: 'Option2',
                label: 'Uzbek'
            }, {
                value: 'Option3',
                label: 'Russian'
            }],
            value: 'Uzbek'
        }
    }
}
</script>

<style scoped>
.language {
 width: 35px;
  height: 35px;
  margin-right:15px;
}
.address-style{
  display: flex;
}
.header-menu{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;
}
.iconssty {
    margin-right: 5px;
    margin-left: 15px;
}
@media only screen and (max-width: 1199px){
.address_name {
  display: none;
}
}
@media only screen and (max-width: 991px){
    .email_name {
      display: none;
    }
}
</style>