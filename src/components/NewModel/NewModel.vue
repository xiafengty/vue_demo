<template>
  <transition name="fade">
  <div id="model"  v-show="isShow">
    <div id="content">
      <div id="model_header">
        <div class="model_header_top">—&nbsp;新人专享礼&nbsp;—</div>
        <div class="model_header_bot">感谢使用网易严选，已为你准备了一份专享礼</div>
      </div>
      <div id="details">
        <div class="details_img">
          <img src="../../../static/images/home/model1.jpg"/>
        </div>
        <div class="details_text">
          <div>埃及进口长绒棉毛巾</div>
          <div>RaIph&nbsp;Lauren</div>
          <div>
            <span>￥32.00</span>
            <span>￥199.00</span>
          </div>
        </div>
      </div>
      <div id="btns">
        <div class="btn1">领券立减¥100.00</div>
        <div class="btn2">查看更多特惠商品</div>
      </div>
    </div>
    <div id="close" @click="closeModel">
      <i class="iconfont icon-yiquxiao"></i>
    </div>
  </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return {
        isShow:false
      }
    },
    mounted(){
      setTimeout(()=>{
        this.isShow=true;
      },0.5)
    },
    methods:{
      closeModel(){
        this.isShow=false
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #model
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0,0,0,0.5);
    z-index: 12;
    &.fade-enter-active,&.fade-leave-active
      transition: all 1s
    &.fade-enter,&.fade-leave-to
      opacity: 0
    #content
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 8.4rem;
      height: 9.22667rem;
      background-color: #fff;
      border-radius: .21333rem;
      padding: .4rem .32rem;
      >div
        width: 100%;
      #model_header
        height: 20%;
        margin-top: 10px;
        >div
          width: 100%;
          text-align: center;
        .model_header_top
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
      #details
        height: 232px;
        width: 100%;
        background-color: #f4f4f4;
        display: flex;
        .details_img
          height:232px;
          width: 232px;
          >img
            width: 100%;
            height: 100%;
        .details_text
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 10px;
  .details_text>div:first-of-type{
    font-size: 28px;
    padding-top: 30px;
  }
  .details_text>div:nth-of-type(2){
    border: 1px solid black ;
    width: 155px;
    padding: 2px 5px;
    font-family:Roboto;
    text-align: center;
  }
  .details_text>div:nth-of-type(3){
    padding-bottom: 30px;
  }
  .details_text>div:nth-of-type(3)>span:first-child{
    font-size: 25px;
    color: #b4282d;
  }
  .details_text>div:nth-of-type(3)>span:last-child{
    font-size: 25px;
    color: #999;
    text-decoration: line-through;
  }
  #btns{
    height: 40%;
  }
  #btns>div{
    display: block;
    width: 100%;
    height: 88px;
    font-size: 25px;
    border-radius: 5px;
    text-align: center;
    line-height: 88px;
  }
  #btns>.btn1{
    background-color: #b4282d;
    margin-top: 40px;
    color: white;
  }
  #btns>.btn2{
    border: 0.5px solid #7F7F7F;
    margin-top: 25px;
    color: #222222;
  }
  #close{
    position: absolute;
    right: 40px;
    top:70px;
  }
  #close>i{
    font-size: 65px;
    color: white;
  }
</style>
