<template>
  <div>
      user:{{id}}
  </div>
</template>

<script>
export default {
props:{
    id:{
        type:[Number,String],
        require:true
    }
}
}
</script>

<style>

</style>