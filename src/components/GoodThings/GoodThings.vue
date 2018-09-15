<template>
  <div id="goodThings">
    <div class="goodThings_header">{{cate.name}}好物</div>
    <div>
      <ul class="goodThings_ul">
        <li class="goodThings_li" v-for="(item,index) in cate.itemList" :key="index">
          <div class="goodThings_content">
            <div class="goodThings_content_img">
              <img :src="item.listPicUrl" alt="">
              <div class="gci_text">{{item.simpleDesc}}</div>
            </div>
            <div class="goodThings_content_text">
              <div class="gct_discount">
                <a v-for="(babel,index) in item.itemTagList" :key="index" :class="labelColor[babel.type]">
                  {{babel.name}}
                </a>
              </div>
              <div class="gct_con">{{item.name}}</div>
              <div class="gct_price">￥{{item.couponPrice}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        labelColor:["redColor","blackColor","orangeColor"]  // type 0 red  1 black     2 orange
      }
    },
    props:{
      cate:Object
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #goodThings
    border-top 20px solid #e4e4e4
    width 100%
    background white
    margin-top 20px
    overflow hidden
    .goodThings_header
      width 100%
      height 120px
      text-align center
      line-height 120px
      font-size 28px
    .goodThings_ul
      .goodThings_li
        background white
        width 375.015px
        height 587px
        float left
        .goodThings_content
          width 375px
          height 587px
          margin 15px
          .goodThings_content_img
            background #f4f4f4
            width 345px
            height 414px
            >img
              width 345px
              height 345px
            .gci_text
              text-align center
              height 69px
              background #F1ECE2
              color #9F8A60
              line-height 69px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
          .goodThings_content_text
            box-sizing border-box
            margin-top 15px
            width 345px
            height 140px
            padding-left 10px
            display flex
            flex-direction column
            justify-content space-around
            .gct_discount
              >a
                display inline-block
                padding 5px 15px
                color white
                font-size 20px
                margin 15px
              .blackColor
                background #cdb694
              .redColor
                background  #e5686d
              .orangeColor
                background  #f48f18
            .gct_con
              font-size 28px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .gct_price
              font-size 30px
              color #b4282d
</style>
