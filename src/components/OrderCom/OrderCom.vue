<template>
  <section id="orderCom">
    <div class="orderCom_header" v-model="recommend">{{recommend.name}}</div>
    <div class="orderCom_content">
      <div class="orderCom_content_detail" v-model="recommend.Item" v-for="(index) in 2" :key="index">
        <div class="ocd_big">
          <div class="ocd_big_img">
            <img :src="recommend.Item[babel].picUrl" alt="">
            <div class="ocd_big_detail">{{recommend.Item[babel].typeName}}</div>
          </div>
          <div class="ocd_big_text">
            <div class="ocd_big_text1">
              <div class="obt_1">{{recommend.Item[babel].title}}</div>
              <div class="obt_2">{{recommend.Item[babel].subTitle}}</div>
            </div>
            <div class="ocd_big_text2" v-show="!detail">{{recommend.Item[babel].priceInfo}}元起</div>
          </div>
        </div>
        <div class="ocd_small1">
          <div class="ocd_small1_left">
            <div class="osl_user">
              <div class="osl_user_header">
                <img :src="recommend.Item[1].avatar" alt="">
              </div>
              <div class="osl_user_info">{{recommend.Item[1].nickname}}</div>
            </div>
            <div class="osl_text">
              <div class="osl_text1">{{recommend.Item[1].title}}</div>
              <div class="osl_text2">
              {{recommend.Item[1].subTitle}}
              </div>
            </div>
          </div>
          <div class="ocd_small1_right">
            <img :src="recommend.Item[1].picUrl" alt="">
            <div class="osr_detail">{{recommend.Item[1].typeName}}</div>
          </div>
        </div>
        <div class="ocd_small1">
          <div class="ocd_small1_left">
            <div class="osl_user">
              <div class="osl_user_header">
                <img :src="recommend.Item[2].avatar" alt="">
              </div>
              <div class="osl_user_info">{{recommend.Item[2].nickname}}</div>
            </div>
            <div class="osl_text">
              <div class="osl_text1">{{recommend.Item[2].title}}</div>
              <div class="osl_text2">
                {{recommend.Item[2].subTitle}}
              </div>
            </div>
          </div>
          <div class="ocd_small1_right">
            <img :src="recommend.Item[2].picUrl" alt="">
            <div class="osr_detail">{{recommend.Item[2].typeName}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        babel:0
      }
    },
    props:{
      recommend:Object,
      detail:Number
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  #orderCom
    border-top 20px solid #e4e4e4
    box-sizing border-box
    width 100%
    padding 0 30px 0 30px
    .orderCom_header
      width 100%
      height 120px
      line-height 120px
      text-align center
      font-size 32px
    .orderCom_content
      width 100%
      .orderCom_content_detail
        width 100%
        .ocd_big
          box-sizing border-box
          width 100%
          height 572px
          border-radius 8px
          border 0.5px solid #d8d8d8
          .ocd_big_img
            width 100%
            height 386px
            position relative
            >img
              width 100%
              height 100%
              border-radius 8px 8px 0 0
            .ocd_big_detail
              position absolute
              top 20px
              left 20px
              height 36px
              padding 0 15px
              border-radius 36px
              border 0.5px solid #dcdcdc
              background white
              text-align center
              line-height 36px
          .ocd_big_text
            width 668px
            height 186px
            padding 24px 20px 0
            display flex
            justify-content space-between
            .obt_1
              font-size 35px
              margin-top 10px
            .obt_2
              font-size 28px
              color #7f7f7f
              margin-top 30px
            .ocd_big_text2
              font-size 35px
              margin-right 20px
        .ocd_small1
          margin-top 30px
          margin-bottom 30px
          width 100%
          height 272px
          border 0.5px solid #d8d8d8
          border-radius 8px
          display flex
          .ocd_small1_left
            box-sizing border-box
            padding 20px
            width 408px
            height 100%
            .osl_user
              width 100%
              height 48px
              .osl_user_header
                float left
                width 46px
                height 46px
                border-radius 50%
                >img
                  width 100%
                  height 100%
                  border-radius 50%
              .osl_user_info
                height 46px
                font-size 20px
                float left
                line-height 46px
                margin-left 10px
            .osl_text
              width 100%
              height 120px
              display flex
              flex-direction column
              justify-content space-around
              margin-top 10px
              .osl_text1
                font-size 32px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
              .osl_text2
                font-size 25px
                color #7f7f7f
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
          .ocd_small1_right
            width 280px
            height 100%
            position relative
            >img
              width 100%
              height 100%
            .osr_detail
              height 35px
              padding 0 15px
              position absolute
              top 10px
              left 10px
              background white
              border-radius 35px
              text-align center
              line-height 35px



</style>
