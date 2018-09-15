<template>
  <div>
    <div id="advert" v-show="advertShow">
      <div class="delete" @click="advertShow=false">×</div>
      <div class="yx_img">
        <img src="../../../static/images/home/advert1.png" alt="">
      </div>
      <div class="content">
        <div class="content1">网易严选</div>
        <div class="content2">立即领取APP新人专享1000元礼包</div>
      </div>
      <div class="open_app">打开app</div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        advertShow:true //广告显示
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #advert
    position relative
    width 100%
    height 104px
    background-color #333
    display flex
    color #fff
    .delete
      height 84px
      font-size 60px
      font-weight 100
      padding 10px
      line-height 84px
      text-align center
    .yx_img
      width 55px
      height 55px
      padding 8px
      background-color #B4282D
      border-radius 15px
      margin-left 15px
      margin-top 18px
      >img
        width 55px
        height 55px
    .content
      display flex
      flex-direction column
      justify-content space-around
      margin-left 15px
      .content1
        margin-top 12px
        font-size 28px
        font-weight bold
      .content2
        margin-bottom 12px
        font-size 24px
    .open_app
      width 138px
      height: 52px
      background-color #B4282D
      text-align center
      line-height 52px
      margin-left 58px
      margin-top 30px
</style>
