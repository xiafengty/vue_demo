<template>
  <section id="mSup">
    <header class="mSup_header">更多精彩</header>
    <div class="mSup_content" v-for="(item,index) in yxWeek">
      <div class="mSup_img">
        <img :src="item.itemPicUrl" alt="">
      </div>
      <div class="mSup_text">{{item.subtitle}}</div>
    </div>
  </section>
</template>
<script>
  export default {
    props:{
      yxWeek:Array
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #mSup
    box-sizing border-box
    width 100%
    background #e4e4e4
    padding 0 30px
    display flex
    flex-direction column
    align-content center
    .mSup_header
      width 100%
      height 140px
      text-align center
      line-height 140px
      font-size 28px
      color #333
      position relative
      &::before
        content ' '
        display block
        width 264px
        height 1px
        background-color #919191
        position absolute
        top 70px
        right 10px
      &::after
        content ' '
        display block
        width 264px
        height 1px
        background-color #919191
        position absolute
        top 70px
        left 10px
    .mSup_content
      background white
      box-sizing border-box
      width 690px
      height 528px
      border-bottom 30px solid #e4e4e4
      padding 24px
      .mSup_img
        width 642px
        height 360px
        >img
          width 100%
          height 100%

      .mSup_text
        font-size 28px
        padding 25px 0
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>
