<template>
  <div class="card">
            <div class="card-body">
                <div class="item">Folklor</div>
                <div class="item">Yosh doirachilar</div>
                <div class="item">Milliy raqs</div>
                <div class="item">Jahon raqslari</div>
                <div class="item">Estrada vokal</div>
                <div class="item">Qo'g'irchoq teatri</div>
                <div class="item">Rejissorlik, jurnalistika va notiqlik</div>
                <div class="item">Teatr va sa'nat</div>
                <div class="item">Tasviriy sa'nat</div>
                <div class="item">Vitraj</div>
                <div class="item">Liboslar dizayni</div>
            </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            
        }
    },
props:{
    course:{
        type:Object,
        requared:true
    },
},
computed:{
        ...mapState({
            dataSubject: state =>state.subject.data,
            isloading: state => state.subject.isloading,
            error: state => state.subject.error,
        })
    }, 
    mounted(){
        this.$store.dispatch('subjects',1)
    },

}
</script>

<style scoped>
 .card {
    border: 1px solid #ff0;
    border-radius: 0;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.card .card-body .item {
    width: 90%;
    height: 50px;
    border-radius: 12px;
    margin-left: 5%;
    margin-top: 10px;
    background-color: #f6f6f6;
    border: 1px solid #cecece;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: initial;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
</style>