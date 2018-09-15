<template>
  <section id="pastTen" class="clearFix">
    <header class="pt_header">十点一刻</header>
    <div class="pt_warp"  ref="pastTen">
      <div class="pt_con" ref="pastTenUl">
        <div class="pt_con_text" v-for="(ten,index) in tenFifteen" :key="index">
          <div class="ptc_header">— 今日话题 —</div>
          <div class="ptc_text1">{{ten.title}}</div>
          <div class="ptc_text2">{{ten.desc}}</div>
          <div class="ptc_person">
            <div class="ptc_inner">
              <div class="ptcp_img" v-for="(part,index) in ten.participantAvatar" :key="index">
                <img :src="part" alt="" v-if="part">
                <img src="../../../static/images/topic/person2.png" alt="" v-else="">
              </div>
              <div class="ptcp_text">{{ten.participantNum}}人参与话题</div>
            </div>
          </div>
        </div>
        <div class="pt_end">
          <span>查看全部话题</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    props:{
      tenFifteen:Array
    },
    watch:{
      tenFifteen(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    },
    methods:{
      _initScroll(){
        const space=30
        const size=this.tenFifteen.length;
        const ul=this.$refs.pastTenUl;
        const width=578
        ul.style.width=(width+space)*(size+1)+2*space+"px";
        console.log(ul.clientWidth);
        new BScroll(this.$refs.pastTen,{
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
  #pastTen
    width 100%
    padding-top 20px
    border-top 20px solid #e4e4e4
    .pt_header
      box-sizing border-box
      width 100%
      height 120px
      padding 0 30px
      font-size 32px
      text-align center
      line-height 120px
    .pt_warp
      width 100%
      .pt_con
        width 578px
        height 441px
        display flex
        padding-left 30px
        .pt_con_text
          box-sizing border-box
          width 578px
          height 100%
          padding 38px 40px 79px
          background url("../../../static/images/topic/pastteb.png") no-repeat 100%
          text-align center
          display flex
          flex-direction column
          margin-right 30px
          .ptc_header
            width 100%
            color #7f7f7f
            font-size 24px
            text-align center
            margin-top 20px
          .ptc_text1
            width 100%
            font-weight 700
            font-size 36px
            text-align center
            margin-top 50px
          .ptc_text2
            width 100%
            font-size 28px
            text-align center
            margin-top 30px
          .ptc_person
            margin-top 80px
            text-align center
            .ptc_inner
              display inline-block
              >div
                float left
              .ptcp_img
                width 48px
                height 48px
                >img
                  width 100%
                  height 100%
                  border-radius 50%
              .ptcp_text
                height 48px
                line-height 48px
                margin-left 15px
                color #7f7f7f


        .pt_end
          box-sizing border-box
          width 578px
          height 441px
          margin-left 30px
          float left
          background url("../../../static/images/topic/pastteb.png") no-repeat 100%
          font-size 32px
          color #7f7f7f
          text-align center
          line-height 441px
          .iconfont
            font-size 32px
</style>
