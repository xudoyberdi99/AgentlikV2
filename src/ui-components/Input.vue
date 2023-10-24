<template>
  <div class="form-floating mt-3">
    <label for="forinput">{{ label }}</label>
    <input :type="type" class="form-control" id="forinput" :placeholder="label">
  </div>
</template>

<script>

export default {
name:'Input',
props: {
    label:String,
    type:String,
}
}
</script>

<style>

</style>