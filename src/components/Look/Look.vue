<template>
  <section id="look">
    <header class="look_header">严选LOOK</header>
    <div class="look_img">
      <img :src="yxLook.picUrl" alt="">
    </div>
    <div class="look_commont">
      <div class="lc_header">
        <div class="lch_img">
          <img :src="yxLook.avatar" alt="">
        </div>
        <div class="lch_info">
          {{yxLook.nickname}}
        </div>
      </div>
      <div class="lc_text">
        {{yxLook.content}}
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props:{
      yxLook:Object
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #look
    border-top 20px solid #e4e4e4
    width 100%
    .look_header
      width 100%
      height 120px
      font-size 32px
      text-align center
      line-height 120px
    .look_img
      width 100%
      height 750px
      >img
        width 100%
        height 750px
    .look_commont
      box-sizing border-box
      width 100%
      height 275px
      padding 40px 30px
      .lc_header
        width 100%
        display flex
        .lch_img
          width 48px
          height 48px
          >img
            width 100%
            height 100%

        .lch_info
          height 48px
          line-height 48px
          margin-left 15px
          color #333
          font-size 25px
      .lc_text
        font-size 28px
        line-height 1.6
        color #7f7f7f
        margin-top 20px

</style>
