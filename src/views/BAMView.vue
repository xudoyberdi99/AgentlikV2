<template>
   <div class="bam-body">
    <div class="title text-uppercase">Yuristkonsult</div>
    <div v-if='isloading' class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container">
        <div class="row"> 
                <BAMCard v-for="bam in data" :bam="bam" :key="bam.id" /> 
        </div>
    </div>
    <Subjects />
</div>
</template>

<script>
import {BAMCard} from '../components'
import { Subjects } from '../components';
import { mapState } from 'vuex';
export default {
components:{
    BAMCard,  
},

    computed:{
            ...mapState({
                data: state =>state.bams.data,
                isloading: state => state.bams.isloading,
                error: state => state.bams.error,
            })
        },
        mounted(){
            this.$store.dispatch('bams')       
        },
}
</script>

<style scoped>
.bam-body {
    width: 100%;
    padding: 30px 0;
    background-color: rgba(133,219,199,.12);
    margin-top: 150px;
    padding-bottom: 30px;
  margin-bottom: 120px;
}
.bam-body .title {
    text-align: center;
    font-size: 28px;
    color: #00f;
    font-weight: 700;
    margin-bottom: 15px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>