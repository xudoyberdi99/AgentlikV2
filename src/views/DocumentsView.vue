<template>
  <div class="nor-hujjat">
    <div class="container">
        <div class="file-title" style="color: rgb(11, 133, 250);">Normativ Hujjatlar</div>
        <div class="content">
            <div class="file-content">
                <div class="sec-1">Nomi</div>
                <div class="sec-3">To'liq ma'lumot</div>
            </div>
            <div class="file-content1">
                <div class="sec-1">Fan texnika faoliyati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, natus, voluptate. Ducimus eveniet, nisi quae quod repellat suscipit totam unde.</div>
                <div class="sec-3">
                    <div class="upload">
                        <a class="btn btn-outline-success rounded" href="https://lex.uz/uz/search/ext?okoz=7341" target="_blank">Batafsil</a>
                    </div>
                </div>
            </div>
            
            <div class="file-content1 " v-for="document in data" :key="document.id">
                <div class="sec-1">{{ document.title }}</div>
                <div class="sec-3">
                    <div class="upload">
                        <a class="btn btn-outline-success rounded" :href="`http://localhost:8181/api/user/view/${document.document.id}`" target="_blank">Batafsil</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:"DocumentsView",
    methods:{
        
    },
    computed:{
        ...mapState({
            data: state =>state.documents.data,
            isloading: state => state.documents.isloading,
            error: state => state.documents.error,
        })
    }, 
    mounted(){
        this.$store.dispatch('documents')
    },

}
</script>

<style scoped>
.sec-1 {
    width: 1000px!important;
    display: block;
    padding-left: 20px;
    font-size: 18px;
}
.sec-3 {
    width:200px!important;
    display: block;
    padding-left: 100px;
}
.nor-hujjat {
    margin-top: 150px;
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
}
.nor-hujjat .file-title {
    text-align: center;
    font-size: 34px;
    color: #000;
    font-weight: 700;
    margin-bottom: 15px;
}
.nor-hujjat .content {
    width: 100%;
    margin-top: 20px;
}
.nor-hujjat .content .file-content {
    border: 1px solid #dbd8d8;
    width: 96%;
    margin-left: 2%;
    height: 50px;
    border-radius: 16px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    
    
}
.nor-hujjat .content .file-content .sec-1, .nor-hujjat .content .file-content .sec-3 {
    height: 100%;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 20px;
    font-weight: 700;
    width: 85%;
    justify-content: start;
    padding-left: 20px;
}
.hujjat .content .file-content .sec-3 {
    height: 100%;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    width: 15%;
    margin-left: 200px;
    justify-content: center;
}
.nor-hujjat .content .file-content1 {
    margin-top: 15px;
    width: 96%;
    margin-left: 2%;
    height: 50px;
    border-radius: 16px;
    background-color: #f6f6f6;
    border: 1px solid #dbd8d8;
    display: flex;
    align-items: center;
    padding: 35px 5px;
}
</style>