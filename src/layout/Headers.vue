<template>
    <div class="header-menu container">
          <div class="address-style">
              <i class="fa-solid fa-map"></i><span> Amir temur ko'chasi 103-uy</span>
              <i class="fa fa-envelope iconssty" aria-hidden="true"></i>
              <span> test@gmail.com</span>
              <i class="fa-solid fa-phone iconssty" aria-hidden="true"><span class="font-weight-light"> (998)939044444</span> </i>
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
.font-weight-light {
  font-size: 14px;
}


</style>