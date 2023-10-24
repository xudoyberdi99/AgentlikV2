<template>
<div class="newscontainer">
    <section class="course-filter">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sec-title text-center mb-5">
                        <h4 style="color: rgb(11, 133, 250); font-size: 35px;">Barcha yangiliklar</h4>
                    </div>
                </div>
                <div class="col-md-12">
                    <div v-if='isloading' class="d-flex justify-content-center">
                             <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    <div  v-else  class="filter-items row">
                        <NewsCard v-for="news in data" :news="news" :key="news.id" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  
</template>

<script>
import { mapState } from 'vuex';
import {NewsCard} from '../components'
export default {
    name:"NewsView",
    components:{
        NewsCard,
    },
    computed:{
        ...mapState({
            data: state =>state.news.data,
            isloading: state => state.news.isloading,
            error: state => state.news.error,
        })
    }, 
    mounted(){
        this.$store.dispatch('news')
    },
}
</script>

<style scoped>
.newscontainer{
    margin-top: 150px;
    padding-bottom: 20px;
}
.course-filter {
    background: rgb(246, 249, 255);
    padding: 62px 0px 70px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

</style>