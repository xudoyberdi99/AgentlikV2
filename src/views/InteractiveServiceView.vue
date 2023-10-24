<template>
    <div class="container-fluid mt-5 mb-5 pt-5 px-5">
        <div class="row mt-5">
            <div class="col-md-9">
                <InteractiveService></InteractiveService>
            </div>
            <div class="col-md-3">
                <Aside></Aside>
            </div>
        </div>
    </div>
</template>
<script>
import InteractiveService from "@/components/AllInteractiveService.vue";
import Aside from "@/layout/Aside.vue"
export default {
    name:'InteractiveServiceView',
    components:{
        InteractiveService,
        Aside
    }

}
</script>