<template>
  <section id="person">
    <header class="ps_header">
      <a class="topic_header1 topicd" @click="$router.replace('/navhome/home')">
        <i class="iconfont icon-zhuye icon1"></i>
      </a>
      <span class="topic_header2 topicd">网易严选</span>
      <a class="topic_header3 topicd">
        <i class="iconfont icon-sousuo icon2" @click="$router.replace('/navhome/topic')"></i>
        <i class="iconfont icon-gouwuche icon3" @click="$router.replace('/navhome/cart')"></i>
      </a>
    </header>
    <div class="ps_contentOne" v-show="showNumber===0">
      <div class="psc1_title">
        <img src="../../../static/images/person/1.png" alt="">
      </div>
      <div class="psc1_login">
        <div class="psc1l_phone" @click="loginType(1)">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="psc1l_mail" @click="loginType(2)">
          <i class="iconfont icon--"></i>
          邮箱账号登录
        </div>
      </div>
      <div class="psc1_register" @click="loginType(3)">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
      <div class="psc1_other">
        <div class="psc1_wx">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="psc1_qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="psc1_wb">
          <i class="iconfont icon-xinlanglogo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="ps_contentTwo" v-show="showNumber===1">
      <div class="psc2_img">
        <img src="../../../static/images/person/1.png" alt="">
      </div>
      <div class="psc2_verify">
        <div class="psc2_vpw">
          <input type="text" placeholder="请输入手机号" v-model="phone"/>
        </div>
        <div class="psc2_vpw">
          <input type="text" placeholder="请输入短信验证码" v-model="code"/>
          <div class="psc2_getVerify">获取验证码</div>
        </div>
      </div>
      <div class="psc2_quest">
        <span class="psc2_q1">遇见问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <div class="psc2_btn">
        <div class="psc2_btn1" @click="loginOne">登录</div>
        <div class="psc2_btn2" @click="loginType(0)">其他方式登录</div>
      </div>
      <div class="psc2_reg" @click="loginType(3)">
        <span>注册账号</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <div class="ps_contentThree" v-show="showNumber===2">
      <div class="psc2_img">
        <img src="../../../static/images/person/1.png" alt="">
      </div>
      <div class="psc2_verify">
        <div class="psc2_vpw">
          <input type="text" placeholder="邮箱账号" v-model="mail"/>
        </div>
        <div class="psc2_vpw">
          <input type="text" placeholder="密码" v-model="password"/>
        </div>
      </div>
      <div class="psc2_quest">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
      <div class="psc2_btn">
        <div class="psc2_btn1" @click="loginTwo">登录</div>
        <div class="psc2_btn2" @click="loginType(0)">其他方式登录</div>
      </div>
    </div>
    <div class="ps_contentFour" v-show="showNumber===3">
      <div class="psc2_img">
        手机号注册
      </div>
      <div class="psc2_verify">
        <div class="psc2_vpw">
          <input type="text" placeholder="请输入手机号" v-model="phone"/>
        </div>
        <div class="psc2_vpw">
          <input type="text" placeholder="请输入短信验证码" v-model="code"/>
          <div class="psc2_getVerify">获取验证码</div>
        </div>
        <div class="psc2_vpw">
          <input type="text" placeholder="请输入密码" v-model="password"/>
        </div>
      </div>
      <div class="psc2_btn">
        <div class="psc2_btn1" @click="loginThree">注册</div>
      </div>
      <div class="psc2_rul">
        我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span>
      </div>
      <div class="psc2_reg">
        <span>邮箱注册账号</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
  </section>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui'
  export default {
    data(){
      return {
        showNumber:0 ,//0 默认进来的页面  1手机号码登录页面  2 邮箱账号登录   3手机号快捷注册
        phone:"",   //手机号
        code:"", // 验证码
        mail:"", //邮箱
        password:"",//密码
      }
    },
    computed:{
      inPhone(){
        return /^1\d{10}$/.test(this.phone)
      },
      inCode(){
        return /^\d{6}$/.test(this.code)
      },
      inMail(){
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.mail)
      },
      inPassword(){
        return /^\d{8-15}$/.test(this.password)
      }
    },
    methods:{
      loginType(index){
        this.showNumber=index;
      },
      loginOne(){
        const {phone,code,inPhone,inCode} = this;
        if(!phone || !code){
          MessageBox.alert("手机或验证码不能为空")
        }else{
          if(!inPhone){
            MessageBox.alert("请输入正确的手机号码")
            return
          }
          if(!inCode){
            MessageBox.alert("验证码输入错误")
          }
        }
      },
      loginTwo(){
        const {mail,password,inMail,inPassword} = this;
        if(!mail || !password){
          MessageBox.alert("邮箱或密码不能为空")
        }else{
          if(!inMail){
            MessageBox.alert("请输入正确的邮箱地址")
            return
          }
          if(!inPassword){
            MessageBox.alert("密码输入错误")
          }
        }
      },
      loginThree(){
        const {phone,code,password,inPhone,inCode,inPassword} = this;
        if(!phone || !password || !code){
          MessageBox.alert("手机号、验证码或密码不能为空")
        }else{
          if(!inPhone){
            MessageBox.alert("请输入正确的手机号码")
            return
          }
          if(!inCode){
            MessageBox.alert("请输入正确的验证码")
          }
          if(!inPassword){
            MessageBox.alert("密码格式错误")
          }
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #person
    width 100%
    .ps_header
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
    .ps_contentOne
      width 100%
      height 1246px
      background #F2F5F4
      text-align center
      position relative
      padding-top 88px
      .psc1_title
        display inline-block
        width 236px
        height 90px
        padding 160px 0
        >img
          width 100%
          height 100%
      .psc1_login
        width 100%
        display flex
        flex-direction column
        align-items center
        .psc1l_phone
          background #b4282d
          margin-bottom 30px
          color white
        .psc1l_mail
          color #b4282d
        >div
          width 670px
          height 94px
          border 1px solid #b4282d
          text-align center
          line-height 94px
          font-size 28px
          .iconfont
            font-size 40px
            vertical-align middle



      .psc1_register
        width 100%
        text-align center
        margin-top 40px
        font-size 28px
        .iconfont
          font-size 35px
          vertical-align middle
      .psc1_other
        width 100%
        height 40px
        font-size 28px
        color #7F7F7F
        display flex
        justify-content center
        position absolute
        bottom 80px
        left 0
        >div
          width 180px
          height 100%
          line-height 40px
          text-align center
          border-left 1px solid #7F7F7F
          .iconfont
            font-size 30px
            vertical-align middle
        .psc1_wx
          border-left 0 solid #7F7F7F
    .ps_contentTwo
      width 100%
      box-sizing border-box
      padding 88px 30px 0
      .psc2_img
        width 100%
        text-align center
        padding 50px 0
        >img
          width 192px
          height 64px

      .psc2_verify
        width 100%
        height 270px
        overflow hidden
        margin-top 70px
        .psc2_vpw
          width 100%
          height 90px
          border-bottom 1px solid #dedede
          line-height 90px
          text-indent 20px
          margin-top 40px
          position relative
          .psc2_getVerify
            padding 0 15px 0 0
            border 1px solid black
            position absolute
            top 0
            right 0
            text-align center
            line-height 60px
            border-radius 15px
            font-size 28px
          >input
            width 590px
            height 43px
            &::-webkit-input-placeholder
              font-size 28px
      .psc2_quest
        width 100%
        display flex
        justify-content space-between
        font-size 28px
        margin-top 40px
        .psc2_q1
          color #7d7d7d
      .psc2_btn
        width 100%
        margin-top 50px
        >div
          width 100%
          height 90px
          border 1px solid #b4282d
          border-radius 10px
          text-align center
          line-height 90px
          font-size 28px
        .psc2_btn1
          background #b4282d
          color white
          margin-bottom 30px
        .psc2_btn2
          color #b4282d


      .psc2_reg
        width 100%
        text-align center
        margin-top 40px
        font-size 28px
        .iconfont
          font-size 40px
          vertical-align middle
    .ps_contentThree
      width 100%
      box-sizing border-box
      padding 88px 30px 0
      .psc2_img
        width 100%
        text-align center
        padding 50px 0
        >img
          width 192px
          height 64px

      .psc2_verify
        width 100%
        height 270px
        overflow hidden
        margin-top 70px
        .psc2_vpw
          width 100%
          height 90px
          border-bottom 1px solid #dedede
          line-height 90px
          text-indent 20px
          margin-top 40px
          position relative
          >input
            width 590px
            height 43px
            &::-webkit-input-placeholder
              font-size 28px
      .psc2_quest
        width 100%
        display flex
        justify-content space-between
        font-size 28px
        margin-top 40px
        color #7d7d7d
      .psc2_btn
        width 100%
        margin-top 50px
        >div
          width 100%
          height 90px
          border 1px solid #b4282d
          border-radius 10px
          text-align center
          line-height 90px
          font-size 28px
        .psc2_btn1
          background #b4282d
          color white
          margin-bottom 30px
        .psc2_btn2
          color #b4282d



    .ps_contentFour
      width 100%
      box-sizing border-box
      padding 88px 30px 0
      .psc2_img
        width 100%
        text-align center
        padding 50px 0
        font-size 35px
      .psc2_verify
        width 100%
        height 395px
        overflow hidden
        margin-top 70px
        .psc2_vpw
          width 100%
          height 90px
          border-bottom 1px solid #dedede
          line-height 90px
          text-indent 20px
          margin-top 40px
          position relative
          .psc2_getVerify
            padding 0 15px 0 0
            border 1px solid black
            position absolute
            top 0
            right 0
            text-align center
            line-height 60px
            border-radius 15px
            font-size 28px
          >input
            width 590px
            height 43px
            &::-webkit-input-placeholder
              font-size 28px
      .psc2_btn
        width 100%
        margin-top 50px
        >div
          width 100%
          height 90px
          border 1px solid #b4282d
          border-radius 10px
          text-align center
          line-height 90px
          font-size 28px
        .psc2_btn1
          background #b4282d
          color white
          margin-bottom 30px


      .psc2_rul
        color #7f7f7f
        >span
          color #007AFF
      .psc2_reg
        width 100%
        text-align center
        margin-top 40px
        font-size 28px
        .iconfont
          font-size 40px
          vertical-align middle
</style>
