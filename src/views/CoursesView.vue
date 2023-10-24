<template>
  <div class="course-body">
    <div class="title" style="color: rgb(11, 133, 250);">To'garaklarimiz</div>
    <div class="container">
        <div v-for="course in data" :key="course.id" class="course-content">
            <div class="name">{{course.name}}</div>
        </div>
        <div class="collapse" style="">
          <Subjects :course="course" />
       </div>
    <div class="course-content">
        <div class="name">Texnika konstruktorlik va modellashtirish</div>
    </div>
        <div class="collapse" style="">
            <div class="card">
                <div class="card-body">
                    <div class="item">Konstruksiya (LEGO)</div>
                    <div class="item">Avtomodel</div>
                    <div class="item">Aviomodel</div>
                    <div class="item">Kubik rubik</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {Subjects} from '../components'
export default {
    components:{
        Subjects
    },
    methods:{
        
    },
    computed:{
        ...mapState({
            data: state =>state.courses.data,
            isloading: state => state.courses.isloading,
            error: state => state.courses.error,
        })
    }, 
    mounted(){
        this.$store.dispatch('courses')
    },
}
</script>

<style scoped>
.course-body {
    width: 100%;
    padding: 30px 0;
    background-color: rgba(133,219,199,.12);
    margin-top: 150px;
    padding-bottom: 30px;
}
.course-body .title {
    text-align: center;
    font-size: 40px;
    color: #000;
    font-weight: 700;
    margin-bottom: 15px;
}
.course-body .course-content .name {
    cursor: pointer;
    margin-top: 25px;
    width: 100%;
    height: 50px;
    background-color: #00eaff;
    color: #f90;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>