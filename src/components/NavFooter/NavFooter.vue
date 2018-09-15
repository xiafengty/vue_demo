<template>
  <nav class="m-tabBar">
    <a class="item" :class="{active:'/navhome/home'===$route.path}" @click="goTo('/navhome/home')">
      <i name="tabBar-index" class="iconfont  icon-zhuye"></i>
      <span class="txt">首页</span>
    </a>
    <a class="item" :class="{active:'/navhome/topic'===$route.path}" @click="goTo('/navhome/topic')">
      <i name="tabBar-topic" class="iconfont icon-shibie"></i>
      <span class="txt">识物</span>
    </a>
    <a class="item" :class="{active:/^\/navhome\/cateList/.test($route.path)}" @click="goTo('/navhome/cateList',$route.id)">
      <i name="tabBar-cate" class="iconfont icon-fenlei"></i>
      <span class="txt">分类</span>
    </a>
    <a class="item" :class="{active:'/navhome/cart'===$route.path}" @click="goTo('/navhome/cart')">
      <i name="tabBar-cart" class="iconfont icon-gouwuche"></i>
      <span class="txt">购物车</span>
    </a>
    <a class="item" :class="{active:'/navhome/person'===$route.path}" @click="goTo('/navhome/person')">
      <i name="tabBar-ucenter" class="iconfont icon-geren"></i>
      <span class="txt">个人</span>
    </a>
  </nav>
</template>
<script>
  export default {
    data(){
      return {
        patha:""
      }
    },
    methods:{
      goTo(path,id){
        this.$router.replace(path)
        this.patha=`/navhome/cateList/${id}`;
      },
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .m-tabBar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 98px;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .m-tabBar>.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .m-tabBar>.item.active{
    color: #b4282d;
  }
  .m-tabBar>.item>.iconfont{
    font-size: 40px;
    margin-bottom: 10px;
  }
</style>
