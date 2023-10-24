<template>
     <div class="col-md-3 col-lg-3 col-12 col-sm-6">
        <div class="bam-card">
                    <div class="bam-title">{{bam.title}}</div>
                    <div class="bam-card-body">
                        <div class="p_t">
                            <div class="tit">Manzil</div>
                            <div class="dic">{{ bam.fullAddress }}</div>
                        </div>
                        <div class="p_t">
                            <div class="tit">Telefon</div>
                            <div class="dic">{{ bam.phoneNumber }}</div>
                        </div>
                        <div class="p_t">
                            <div class="tit">Direktor</div>
                            <div class="dic">bam.direktorName</div>
                        </div>
                    </div>
                </div>
            </div>    
</template>

<script>
export default {
    props:{
        bam:{
              type:Object,
              requared:true  
          }
      },
}
</script>

<style scoped>
 .bam-card {
    margin-top: 25px;
    width: 100%;
    border: 1px solid rgba(19,183,243,.71);
    border-radius: 6px;
}
.bam-card .bam-title {
    border-radius: 6px;
    width: 100%;
    height: 50px;
    background-color: #fff;
    color: #00f;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bam-card .bam-card-body {
    width: 100%;
    height: calc(100% - 50px);
    background-color: #31ee23;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding-bottom: 20px;
}
.bam-card .bam-card-body .p_t {
    padding-top: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    padding-left: 14px;
    padding-right: 14px;
}
.bam-card .bam-card-body .p_t .tit {
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000;
}
.bam-card .bam-card-body .p_t .dic {
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}
</style>