<template>
  <section id="topic">
    <header id="topic_header">
      <a class="topic_header1 topicd" @click="$router.replace('/navhome/home')">
        <i class="iconfont icon-zhuye icon1"></i>
      </a>
      <span class="topic_header2 topicd">网易严选</span>
      <a class="topic_header3 topicd">
        <i class="iconfont icon-sousuo icon2"></i>
        <i class="iconfont icon-gouwuche icon3" @click="$router.replace('/navhome/cart')"></i>
      </a>
    </header>
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper" ref="swiper">
          <div class="swiper-slide" v-for="(ban,index) in banner" :key="index">
            <img :src="ban.picUrl">
            <div class="swiper-slide_text" v-show="ban.subTitle">
              <div class="swiper-slide_text1">— {{ban.subTitle}} —</div>
              <div class="swiper-slide_text2">{{ban.title}}</div>
              <div class="swiper-slide_text3">{{ban.desc}}</div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <nav id="recommend" ref="recommend">
      <ul ref="recommendUl" class="recommendUl">
        <li class="recommendLi" v-for="(col,index) in column " :key="index">
          <div class="recommend_img">
            <div class="recommend_img_text">{{col.articleCount}}&nbsp;</div>
            <img :src="col.picUrl" alt="">
          </div>
          <div class="recommend_text">{{col.title}}</div>
        </li>
      </ul>
    </nav>
    <OrderCom :recommend="recommend"/>
    <PastTen :tenFifteen="tenFifteen"/>
    <OrderCom :recommend="zhenItem" :detail="2"/>
    <Look :yxLook="yxLook"/>
    <MoreSurprises :yxWeek="yxWeek"/>
    <div id="ceshi"></div>
  </section>
</template>
<script>
  import BScroll from "better-scroll"
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from "vuex";

  import OrderCom from "../../components/OrderCom/OrderCom.vue"
  import PastTen from "../../components/PastTen/PastTen.vue"
  import Look from "../../components/Look/Look.vue"
  import MoreSurprises from "../../components/MoreSurprises/MoreSurprises.vue"

  export default {
    computed:{
      ...mapState([
        "banner",
        "column",
        "recommend",
        "tenFifteen",
        "zhenItem",
        "yxLook",
        "yxWeek"
      ])
    },
    mounted(){
      this.$store.dispatch("getTopicList")
      this._initScroll()
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          centeredSlides: true,  //居中
          autoplay: {     //自动轮播
            delay: 2000,
            disableOnInteraction: false,
          },
          slidesPerView: 1.25,
          spaceBetween:30,
          loop: true ,  //无线循环
        });
      })
    },
    watch:{
      banner(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    },
    methods:{
      _initScroll(){
        const space=30
        const size=this.column.length;
        const ul=this.$refs.recommendUl;
        const width=164
        ul.style.width=(width+space)*size+"px";
        new BScroll(this.$refs.recommend,{
          click:true,
          scrollX:true,
          scrollY:false
        });
      }
    },
    components:{
      OrderCom,
      PastTen,
      Look,
      MoreSurprises
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #topic
    width 100%
    overflow hidden
    #topic_header
      position fixed
      top 0
      left 0
      z-index 10
      width 100%
      height 88px
      background #FAFAFA
      text-align center
      line-height 88px
      .iconfont
        font-size 50px
        color #474747
      >span
        font-size 38px
        font-family "宋体"
        font-weight bold
      .topicd
        display inline-block
      .topic_header1
        width 19%
        .icon1
          margin-right 40px
      .topic_header2
        width 60%
      .topic_header3
        width 19%
        .icon3
          margin-left 15px
          margin-right 30px
    .msite_nav
      margin-top 107px
      height 400px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            position relative
            >img
              width 100%
              height 385px
              border-radius 10px
            .swiper-slide_text
              width 466px
              height 198px
              background-color  rgba(255,255,255,.9)
              position absolute
              top 0
              bottom 0
              right 0
              left 0
              margin auto
              z-index 2
              >div
                text-align center
              .swiper-slide_text1
                font-size 20px
                color #7f7f7f
                margin-top 40px
              .swiper-slide_text2
                font-size 35px
                font-weight bold
                margin-top 25px
              .swiper-slide_text3
                font-size 22px
                color #333
                margin-top 20px
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    #recommend
      width 100%
      height 286px
      padding 40px 30px 28px
      overflow hidden
      margin-left 20px
      .recommendUl
        display flex
        margin-left 30px
        .recommendLi
          width 164px
          height 210px
          margin-right 22px
          .recommend_img
            width 164px
            height 164px
            position relative
            >img
              width 100%
              height 100%
            .recommend_img_text
              width 100%
              height 32px
              position absolute
              top 0
              left 0
              z-index 10
              text-align right
              line-height 32px
              color white
              background linear-gradient(to right,transparent, #b7b7b7)
          .recommend_text
            box-sizing border-box
            width 100%
            text-align center
            padding 20px
    #ceshi
      height 100px
</style>
