<template>
  <section id="cartList">
    <header class="cl_header">
      <div class="cl_search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共13231款好物</span>
      </div>
    </header>
    <nav class="cl_nav" ref="clNav">
      <ul class="cln_ul" v-if="category">
        <li class="cln_li"
            v-for="(cate,index) in category" :key="index" @click="showClassify(index,cate[1])"
            :class="{active:index===showIndex || (index===0 && showIndex===0)}"
        >
          {{cate[0]}}
        </li>
      </ul>
    </nav>
    <div class="cl_content" v-if="category">
        <router-view :index="showIndex" :categoryL1List="categoryL1List"/>
    </div>
  </section>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState,mapGetters} from "vuex"
  export default {
    data(){
      return {
        showIndex:0,
        id:1022001
      }
    },
    computed:{
      ...mapState(["category","categoryL1List"]),
    },
    mounted(){
      this.$store.dispatch("getCateList")
      this._initScroll()
    },
    watch:{
      category(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    },
    methods:{
      showClassify(index,id){
        this.showIndex=index;
        this.id=this.category[index][1];
        this.$router.replace(`/navhome/cateList/${id}`);
      },
      _initScroll(){
        new BScroll(this.$refs.clNav,{
          click:true,
          scrollY:true
        });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #cartList
    width 100%
    .cl_header
      position fixed
      top 0
      left 0
      box-sizing border-box
      width 100%
      height 88px
      display flex
      justify-content center
      padding 16px 0
      border-bottom 1px solid #e1e1e1
      z-index 1000
      background white
      .cl_search
        width 690px
        height 56px
        border-radius 5px
        background #ededed
        color #666
        font-size 28px
        text-align center
        line-height 56px
        .iconfont
          font-size 28px
    .cl_nav
      position fixed
      top 88px
      left 0
      border-right 1px solid #e1e1e1
      width 162px
      height 1140px
      .cln_ul
        width 100%
        height 1150px
        .active
          color #ab2b2b !important
          position relative
          &::before
            content ' ';
            position absolute
            top 0
            left 0
            bottom 0
            width .08rem
            height 50px
            background-color #ab2b2b
        .cln_li
          width 100%
          height 50px
          font-size 28px
          text-align center
          line-height 50px
          margin-top 40px
          >a
            color #333


    .cl_content
      box-sizing border-box
      width 587px
      margin-left 163px
      margin-top 88px
</style>
