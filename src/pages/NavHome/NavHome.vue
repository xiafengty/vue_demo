<template>
  <div>
    <NavFooter v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>

</template>
<script>
  import NavFooter from "../../components/NavFooter/NavFooter.vue"
  export default {
    components: {
      NavFooter,
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html{
    font-size:100px;
  }
</style>
