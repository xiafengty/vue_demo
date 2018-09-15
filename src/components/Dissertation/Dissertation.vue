<template>
  <div id="dissert">
    <div class="dissert_header">
      <span>专题专精</span>
      <i class="iconfont icon-jiantou"></i>
    </div>
    <div class="dissert_content" ref="dissert">
      <ul ref="dissertUl" class="dissert_ul">
        <li class="dissertLi" v-for="(topic,index) in topicList" :key="index">
          <div class="dissertLi_img">
            <img :src="topic.itemPicUrl" alt="">
          </div>
          <div class="dissertLi_con">
            <div class="dissertLi_con1">
              <span class="dissertLi_con11">{{topic.title}}</span>
              <span class="dissertLi_con12">{{topic.subtitle}}</span>
            </div>
            <div class="dissertLi_con2">
              {{topic.priceInfo}}元起
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    props:{
      topicList:Array
    },
    mounted(){
      this._initScroll();
    },
    watch:{
      topicList(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    },
    methods:{
      _initScroll(){
        const space=20
        const size=this.topicList.length;
        const width=575
        const ul=this.$refs.dissertUl;
        ul.style.width=(width+space)*size+"px";
        new BScroll(this.$refs.dissert,{
          click:true,
          scrollX:true,
          scrollY:false
        });
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #dissert
    border-top 20px solid #e4e4e4
    width 100%
    height 563px
    background white
    padding-top 20px
    .dissert_header
      width 100%
      height 110px
      text-align center
      line-height 110px
      font-size 30px
      >i
        font-size 35px
        color #bbbbbb
    .dissert_content
      overflow hidden
      width 100%
      height 463px
      padding-left 10px
      box-sizing border-box
      .dissert_ul
        display flex
        .dissertLi
          width 575px
          margin-left 20px
          .dissertLi_img
            width 575px
            height 322px
            >img
              width 100%
              height 100%
          .dissertLi_con
            display flex
            justify-content space-between
            .dissertLi_con1
              margin-top 20px
              height 80px
              display flex
              flex-direction column
              justify-content space-around
              .dissertLi_con11
                font-size 28px
              .dissertLi_con12
                color #8c8c8c
            .dissertLi_con2
              text-align center
              color #b4282d
              font-size 26px
              margin-top 27px



</style>
