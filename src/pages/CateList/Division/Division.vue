<template>
  <section id="division" v-show="categoryList">
    <div class="div_header">
      <img :src="categoryList.bannerUrl" alt="">
    </div>
    <div class="div_content" v-if="!categoryList.level">
      <ul class="dc_ul">
        <li class="dc_li" v-for="(subCate,index) in categoryList.subCateList">
          <div class="dcl_img">
            <img :src="subCate.bannerUrl" alt="">
          </div>
          <div class="dcl_text">{{subCate.name}}</div>
        </li>
      </ul>
    </div>
    <div class="div_content" v-else>
      <ul class="dc_ul">
        <li class="dc_li" v-for="(subList,index) in categoryList.subCateList">
          <div class="dcl_img">
            <img :src="subList.wapBannerUrl" alt="">
          </div>
          <div class="dcl_text">{{subList.name}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    props:{
      categoryL1List:Array,
      index:Number,
    },
    computed:{
      categoryList(){
        const {index} = this;
        const categoryList=this.categoryL1List[index];
        return categoryList;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #division
    box-sizing border-box
    width 100%
    padding 30px
    display flex
    flex-direction column
    align-items center
    .div_header
      width 528px
      height 192px
      >img
        width 100%
        height 100%
    .div_content
      width 100%
      .dc_ul
        width 100%
        overflow hidden
        .dc_li
          float left
          width 33.333333333%
          height 200px
          margin-top 35px
          .dcl_img
            width 144px
            height 144px
            >img
              width 100%
              height 100%
          .dcl_text
            width 144px
            text-align center

</style>
