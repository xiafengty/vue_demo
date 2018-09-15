<template>
  <section id="shopCart">
    <div class="sc_header">
      <span class="sch_text">购物车</span>
      <div class="sch_right">领劵</div>
    </div>
    <div class="sc_content">
      <div class="scc_info">
        <ul class="scc_ul">
          <li class="scc_li"><span>30天无忧退货</span></li>
          <li class="scc_li"><span>48小时快速退款</span></li>
          <li class="scc_li"><span>满88元免邮费</span></li>
        </ul>
      </div>
      <div class="scc_img"></div>
      <div class="scc_text">
        <div class="scc_tt">去添加点什么吧</div><br/>
        <div class="scc_login" @click="$router.push('/navhome/person')">登录</div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #shopCart
    width 100%
    height 100%
    .sc_header
      width 100%
      height 88px
      text-align center
      position relative
      border-bottom 1px solid #ececec
      .sch_text
        display inline-block
        height 100%
        line-height 88px
        font-size 36px
      .sch_right
        height 100%
        position absolute
        top 0
        right 50px
        line-height 88px
        font-size 30px
        color #B4282D

    .sc_content
      width 100%
      height 1246px
      background #f4f4f4
      position relative
      .scc_info
        box-sizing border-box
        width 100%
        height 70px
        padding 30px 0
        margin-top 30px
          color #696969
        .scc_ul
          width 100%
          height 100%
          display flex
          justify-content space-around
      .scc_img
        width 248px
        height 248px
        background url("../../../static/images/shopcart/1.png") no-repeat 100%
        position absolute
        top -70px
        left 0
        right 0
        bottom 0
        margin auto
      .scc_text
        width 100%
        text-align center
        position fixed
        top 785px
        left 0
        >div
          display inline-block
        .scc_tt
          width 100%
          color #999
          font-size 28px
          text-align center
          padding-bottom 50px
        .scc_login
          width 480px
          height 92px
          background #b4282d
          color white
          text-align center
          line-height 92px
          font-size 30px

</style>
