<template>
  <section class="top-bar">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-5">
                <div class="bar-left">
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><i class="fa-solid fa-location-pin link mr-3"></i>Oybek metro ro'parasi.</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-md-7">
                <div class="bar-right d-flex justify-content-end">
                    <ul class="list-unstyled list-inline bar-social">
                        <li class="list-inline-item mr-4"><a href="/"><i class="fab fa-facebook-f link "></i></a></li>
                        <li class="list-inline-item mr-4" ><a href="/"><i class="fab fa-twitter link"></i></a></li>
                        <li class="list-inline-item mr-4"><a href="/"><i class="fab fa-instagram link"></i></a></li>
                    </ul>
                    <ul class="list-unstyled list-inline bar-lang">
                        <li class="list-inline-item">
                            <div class="dropdown">
                                <a class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Uzbek<i class="las la-angle-down"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
methods:{
}
}
</script>

<style>
.top-bar{
    background-color: rgb(24,43,73);
}
    
.list-inline-item {
    color: white;
    margin-right: 15px;
    padding-top: 10px!important;
}
.link {
    color: green;
}
.list-inline {
    margin-bottom: 10px;
}
</style>