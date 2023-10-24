<template>
    <div v-if="achievementsDetail" class="new-detail-page">
      <div class="container">
          <div class="detail-img">
              <div class="news-img">
                  <img :src="`http://localhost:8181/api/user/view/${this.achievementsDetail.images.id}`"  alt="KJE">
              </div>
          </div>
          <div class="detail-title">{{ achievementsDetail.name }}</div>
          <div class="detail-text"> {{achievementsDetail.description}}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
  computed:{
      ...mapState({
        achievementsDetail: state=>state.achievements.achievementsDetail,
      }),
  }
  }
  </script>
  
  <style scoped>
  .new-detail-page {
      padding: 20px;
      width: 100%;
      background-color: #fff;
  }
  .new-detail-page .detail-img .news-img {
      width: 100%;
      height: 400px!important;
      margin: 0 0 20px;
      padding: 0 20px;
  }
  .new-detail-page .detail-img .news-img img {
      width: 100%;
      height: 100%;
      object-fit:cover;
  }
  .new-detail-page .detail-title {
      margin-top: 15px;
      text-align: center;
      font-size: 28px;
      color: #000;
      font-weight: 700;
      margin-bottom: 15px;
  }
  .new-detail-page .detail-text {
      width: 90%;
      margin-left: 5%;
      display: flex;
      text-align: center;
      justify-content: center;
      padding-top: 5px;
      font-size: 16px;
      font-family: sans-serif,Roboto;
      color: #083eef;
  }
  </style>