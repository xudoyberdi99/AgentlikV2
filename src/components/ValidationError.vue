<template>
  <ul class="list-group">
    <li class="list-group-item list-group-item-danger mt-2" v-for="errorMessage in errorMessages" :key="errorMessage">
        {{ errorMessage }}
    </li>
  </ul>
  
</template>

<script>
export default {
    name:'ValidationError',
    props:{
        validationErrors:{
            type: Array,
            required:true,
        },
    },
    computed: {
        errorMessages(){
            return Object.keys(this.validationErrors).map(name => {
                const msg=this.validationErrors[name].join(',')
                return `${name} ${msg}`
            })
        },
    },
}
</script>

<style>

</style>