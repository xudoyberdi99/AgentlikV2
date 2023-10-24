<template>
  <div class="col-lg-4 col-md-6">
    <div class="course-item" @click="navigateHandler">     
            <div class="course-image">
                <div class="author-img d-flex">
                    <div class="img"><img :src="`http://localhost:8181/api/user/view/${this.news.images.id}`" class="img-fluid" alt="wfe"></div>
                </div>
            </div> 
    <div class="course-content">
        <h6 class="heading">
            <p class="title pt-3">
                {{ news.name }}
            </p>
            
        </h6>
        <p class="desc">
            {{ news.title }}
        </p>
        <div class="course-face d-flex justify-content-between">
            <div class="duration">
                <button type="submit" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Batafsil</button>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        news:{
            type:Object,
            requared:true  
        }
    },
    methods:{
        navigateHandler(){
            return this.$router.push(`/news/News-detail/${this.news.id}`)
        },
    },
   
   
}
</script>

<style scoped>
.heading {
    font-weight: 500;
    line-height: 1.2;
    
}
.title {
    font-size: 24px;
}
.course-item{
    transition: all 0.2s ease 0s;
    margin-bottom: 30px;
    width: 100%;
    cursor: pointer;
    
}
  .course-item .course-image {
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 5px 5px 0px 0px;
    position: relative;
}
.course-content {
    background: rgb(255, 255, 255);
    padding: 0px 25px;
    height: 250px;
    border-radius: 0px 0px 5px 5px;
}
.desc {
    height: 140px;
    font-size: 14px;
    color: rgb(150, 150, 150);
    line-height: 25px;
    border-bottom: 1px solid rgb(238, 238, 238);
    margin-bottom: 12px;
}

</style>