<template>
  <div id="bodyWrap">
    <div id="msite">
      <NewModel/>
      <div id="fixeds">
        <Advert/>
        <div id="header">
          <div id="header_img">
            <img src="../../../static/images/home/headerlogo.png" />
          </div>
          <div id="header_search">
            <i class="iconfont icon-sousuo"></i>
            搜索商品, 共13118款好物
          </div>
        </div>
        <div class="navList" ref="navList">
          <ul class="navContain" ref="navUl">
            <li class="lis" v-for="(nav,index) in navLists" :key="index" >
              <a href="#">
                {{nav}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slide,index) in slideShows" :key="index">
              <img :src="slide">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <div id="label">
        <div class="label_con">
          <i class="iconfont icon-duihao"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="label_con">
          <i class="iconfont icon-duihao"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="label_con">
          <i class="iconfont icon-duihao"></i>
          <span>48小时快速退款</span>
        </div>
      </div>
    </div>
    <Maker/>
    <div id="hd">
      <div class="hd_wrap">
        <div class="text">新品首发</div>
        <div class="btns">
          <a>查看全部></a>
        </div>
      </div>
    </div>
    <GoodGrid :newItem="newItemNewUserList"/>
    <div id="moods">
      <div class="moods_wrap">
        <div class="text">人气推荐 · 好物精选</div>
        <div class="btns">
          <a>查看全部></a>
        </div>
      </div>
    </div>
    <News :newItem="popularItemList"/>
    <Limited/>
    <div id="welfare">
      <a href="#"></a>
    </div>
    <Dissertation :topicList="topicList"/>
    <GoodThings v-for="(cate,index) in cateList" :key="index" :cate="cate"/>
    <footer id="footer">
      <div class="footer_con">
        <div class="footer_con_btn">
          <div class="footer_con_btn1">下载App</div>
          <div>电脑版</div>
        </div>
        <div class="footer_con_text">
          <span>网易公司版权所有 © 1997-2018</span>
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    </footer>
    <div id="ceshi"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from  "vuex"
  import BScroll from "better-scroll"

  import NewModel from "../../components/NewModel/NewModel.vue"
  import Advert from "../../components/Advert/Advert.vue"
  import Maker from "../../components/Maker/Maker.vue"
  import GoodGrid from "../../components/GoodGrid/GoodGrid.vue"
  import News from "../../components/News/News.vue"
  import Limited from "../../components/Limited/Limited.vue"
  import Dissertation from "../../components/Dissertation/Dissertation.vue"
  import GoodThings from "../../components/GoodThings/GoodThings.vue"
  export default {
    data(){
      return {
        advertShow:true, //广告显示
      }
    },
    computed:{
      ...mapState([
        "navLists",
        "slideShows",
        "newItemNewUserList",
        "popularItemList",
        "topicList",
        "cateList"
      ]),
    },
    mounted(){
      this.$store.dispatch("getTagList")
      if(!this.navLists){
        return
      }
      this._initScroll();
      this.$nextTick(()=>{
        /*swiper只有在页面加载完成后才能够执行，故使用￥nextTick在页面更新后加载*/
        new Swiper('.swiper-container', {
          centeredSlides: true,  //居中
          autoplay: {     //自动轮播
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {   //小圆点
            el: '.swiper-pagination'
          },
          loop: true   //无线循环
        });
      })
    },
    watch:{
      navLists(){
        this.$nextTick(()=>{
          this._initScroll();
        })
      },
    },
    methods:{
      _initScroll(){
        const space=80
        const size=this.navLists.length;
        const ul=this.$refs.navUl;
        const lis=document.querySelectorAll(".navList>ul>li");
        const arr=[];
        for(let i=0;i<lis.length;i++){
          if(lis[i].clientWidth>60){
            lis[i].style.width=120+"px";
          }
          arr.push(lis[i].clientWidth);
        }
        const width=arr.reduce((prev,width)=>
          prev+width,0
        )
        ul.style.width=width+space*size+"px";
        new BScroll(this.$refs.navList,{
          click:true,
          scrollY:false,
          scrollX:true
        });
      },
    },
    components:{
      NewModel,
      Advert,
      Maker,
      GoodGrid,
      News,
      Limited,
      Dissertation,
      GoodThings
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  a{
    cursor: pointer;
  }
  bodyWrap{
    padding-bottom  99px
  }
  #msite
    background-color white
    #fixeds
      position fixed
      top 0
      left 0
      z-index 10
      #header
        height 88px
        width 750px
        padding 10px 20px
        box-sizing border-box
        display flex
        background-color white
        #header_img
          width 30%
          height 100%
          line-height 88px
          >img
            width 138px
            height 40px
            margin-left 20px
        #header_search
          width 70%
          height 60px
          background-color #e5e5e5
          margin-top 5px
          margin-right 10px
          border-radius 10px
          color #666
          font-size 25px
          text-align center
          line-height 60px
          >.iconfont
            font-size 30px
      .navList
        overflow hidden
        width 750px
        height 60px
        margin-bottom -30px
        background-color white
        >ul
          font-size 28px
          padding 20px 20px
          padding-left 50px
          >li
            margin-right  80px
            white-space:nowrap
            float left
            >a
              color #222222
    .msite_nav
      margin-top 175px
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
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774


    #label
      width 100%
      height 72px
      display flex
      justify-content space-around
      .label_con
        height 72px
        line-height 72px
        >i
          color red
          font-size 30px

  #hd
    border-top 20px solid #e4e4e4
    position relative
    width 100%
    height 250px
    margin-top 20px
    background url("../../../static/images/home/new.png")
    .hd_wrap
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      width 230px
      height 90px
      .text
        width 100%
        text-align center
        color #8BA0B6
        font-size 35px
      .btns
        width 100%
        height 55px
        background #D8E5F1
        text-align center
        line-height 55px
        margin-top 30px
  #moods
    border-top 20px solid #e4e4e4
    position relative
    width 100%
    height 250px
    margin-top 20px
    background url("../../../static/images/home/moods.png")
    .moods_wrap
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      width 330px
      height 90px
      text-align center
      .text
        width 100%
        text-align center
        color #B4A078
        font-size 35px
      .btns
        display inline-block
        width 230px
        height 55px
        background #F4E9CB
        text-align center
        line-height 55px
        margin-top 30px
  #welfare
    border-top 20px solid #e4e4e4
    width 100%
    height 300px
    background url("../../../static/images/home/welfare.jpg")
    background-repeat no-repeat
    margin-top 20px
  #footer
    width 100%
    height 245px
    background #333
    .footer_con
      .footer_con_btn
        width 398px
        color white
        display flex
        justify-content
        margin-left 100px
        padding-top 50px
        padding-left 170px
        .footer_con_btn1
            margin-right 50px
        >div
          display inline-block
          width 172px
          height 62px
          border: 1px solid #999;
          text-align center
          line-height 62px
      .footer_con_text
        width 100%
        text-align center
        color #999
        display flex
        flex-direction column
        padding 30px 0
        >span
          padding-bottom 10px
  #ceshi
    height 100px

</style>
