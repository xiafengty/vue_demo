<template>
  <div id="mask">
    <div class="header">
      <span>品牌制造商直供</span>
      <i class="iconfont icon-jiantou"></i>
    </div>
    <div class="blurb">
      <ul class="blurb_ul clearFix" v-if="needTagList">
        <li class="blurb_li" v-for="(tags,index) in needTagList" :key="index">
          <div class="blurb_li_text">
            <span class="text1" v-if="tags.name">{{tags.name}}</span>
            <span class="text1" v-if="tags.floorPrice">{{tags.floorPrice}}元起</span>
            <span class="text1 upNew">上新</span>
          </div>
          <img :src="tags.picUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState,mapGetters} from "vuex";
  export default {
    computed:{
      ...mapState(["tagList"]),
      ...mapGetters(["needTagList"])
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #mask
    top-border-20px(#eeeeee)
    background-color white
    width 100%
    height 586px
    margin-top 20px
    color #333
    .header
      padding-top 15px
      height 100px
      width 100%
      text-align center
      font-size 32px
      line-height 100px
      margin-bottom 10px
      >i
        font-size 35px
        color #959595
    .blurb
      width 100%
      height 486px
      .blurb_ul
        margin-left 10px
        margin-bottom -18px
        .blurb_li
          position relative
          width 355px
          height 236px
          float left
          background-color #f4f4f4
          display flex
          margin  5px
          flex-direction column
          >img
            position absolute
            top: 0
            left 0
            width 100%
            height 100%
          .blurb_li_text
            font-size 28px
            display flex
            flex-direction column
            .text1
              margin-top 20px
              margin-left 20px
            .upNew
              border 0.5px solid #dd8500
              width 46px
              color #dd8500
              font-size 23px
              padding 3px 5px









</style>
