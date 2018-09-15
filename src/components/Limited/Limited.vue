<template>
  <div id="limited">
    <div class="limited_text">
      <div class="limited_text1">严选限时购</div>
      <div class="limited_text2">
        <span>{{times.hour}}</span>&nbsp;:
        <span>{{times.minute}}</span>&nbsp;:
        <span>{{times.second}}</span>
      </div>
      <div class="limited_text3">下一场&nbsp;10:00&nbsp;开始</div>
    </div>
    <div class="limited_img">
      <img src="../../../static/images/home/limited.png" alt="">
    </div>
    <div class="limited_price">
      <div class="limited_price_con">
        <div>￥99</div>
        <div class="limited_price_con2">￥109</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapState} from "vuex"
  export default {
    computed:{
      ...mapState(["times"]),
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #limited
    background-color white
    width 100%
    height 380px
    display flex
    justify-content space-around
    position relative
    border-top 20px solid #e4e4e4
    .limited_text
      width 334px
      height 320px
      box-sizing border-box
      padding-top 80px
      padding-left 30px
      display flex
      justify-content space-around
      flex-direction column
      .limited_text1
        font-size 36px
        letter-spacing:15px
      .limited_text2
        font-size 32px
        >span
          color white
          display inline-block
          width 62px
          height 56px
          background-color #444
          text-align center
          line-height 56px
      .limited_text3
        font-size 25px
    .limited_img
      width 320px
      height 320px
    .limited_price
      width 96px
      height 96px
      border-radius 50%
      background-color rgba(244,143,24,.95)
      position absolute
      right 60px
      bottom 60px
      .limited_price_con
        width 70px
        height 70px
        color white
        font-size 26px
        margin-top 16px
        margin-left 12px
        .limited_price_con2
          text-decoration line-through
</style>
