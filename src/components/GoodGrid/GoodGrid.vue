<template>
  <div class="good_wrap wrap1 wrap2" ref="wrap1">
    <ul class="wrap_ul" ref="navUl" v-if="newItem">
      <li v-for="(newList,index) in newItem" :key="index">
        <div class="img">
          <img :src="newList.listPicUrl" alt="">
        </div>
        <div class="content">
          <ul class="conUl">
            <li class="conLi">
              <span class="con header">{{newList.name}}</span>
              <span class="con info">{{newList.simpleDesc}}</span>
              <span class="price">￥{{newList.retailPrice}}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    props:{
      newItem:Array,
    },
    mounted(){
      this._initScroll2();
    },
    watch:{
      newItem(){
        this.$nextTick(()=>{
          this._initScroll2()
        })
      }
    },
    methods:{
      _initScroll2(){
        const space=30
        const size=this.newItem.length;
        const ul=this.$refs.navUl;
        const width=280
        ul.style.width=(width+space)*size+"px";
        new BScroll(this.$refs.wrap1,{
          scrollX:true,
          eventPassthrough:'vertical',

        });
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/mixins.styl"
  border-top 20px solid #e4e4e4
  .good_wrap
    padding-top 30px
    background white
    overflow hidden
    width 100%
    height 460px
    .wrap_ul
      display flex
      .img
        width 280px
        height 280px
        margin-left 20px
        background-color #F4F4F4
        >img
          width 100%
          height 100%
      .content
        width 100%
        height 200px
        margin-left 30px
        font-size 28px
        margin-top 10px
        .conUl
          .conLi
            width 100%
            height 120px
            display flex
            flex-direction column
            justify-content space-around
            .con
              width 280px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .info
              color #7f7f7f
              font-size 24px
            .price
              color #b4282d
              font-size 25px


</style>
