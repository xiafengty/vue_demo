<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="../../../static/images/interlayer/inter1.jpg">
      <img src="../../../static/images/interlayer/inter2.jpg">
    </div>
    <div class="g-row">
      <img src="../../../static/images/interlayer/inter3.jpg">
      <a href="#" id="downloadBtn"></a>
      <a href="#" id="backWapBtn" @click="goTo('/navhome')"></a>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    font-size: 24px;
    background: #e3e3e2;
  }
  .g-bd {
    max-width: 10rem;
    margin: 0 auto;
    background: #eee;
  }
  .g-row {
    position: relative;
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
  }
  .g-row img {
    vertical-align: top;
    width: 100%;
  }
  #downloadBtn {
    position: absolute;
    display: block;
    width: 5.76rem;
    height: 1.30667rem;
    left: 1.92rem;
    top: 1.29333rem;
  }
  #backWapBtn {
    position: absolute;
    display: block;
    width: 3.38667rem;
    height: .4rem;
    left: 3.14667rem;
    top: 3.08rem;
  }

</style>
