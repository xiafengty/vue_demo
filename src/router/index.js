/*引入基础vue组件*/
import Vue from "vue";
import VerRouter from "vue-router"

/*引入导航页面*/
import InterLayer from "../pages/InterLayer/InterLayer.vue"
import Home from "../pages/Home/Home.vue"
import Topic from "../pages/Topic/Topic.vue"
import CateList from "../pages/CateList/CateList.vue"
import ShopCart from "../pages/ShopCart/ShopCart.vue"
import Person from "../pages/Person/Person.vue"
import NavHome from "../pages/NavHome/NavHome.vue"
import Division from "../pages/CateList/Division/Division.vue"
/*使用路由*/
Vue.use(VerRouter);

/*
* this.$route.params.id;//寻找占位符
* */

/*设置导航路由*/
export default new VerRouter({
  routes:[
    {
      path:"/interlayer",
      component:InterLayer
    },
    {
      path:"/navhome",
      component:NavHome,
      children:[
        {
          path:"/navhome/home",
          component:Home,
          meta:{
            showFooter:true
          }
        },
        {
          path:"/navhome/topic",
          component:Topic,
          meta:{
            showFooter:true
          }
        },
        {
          path:"/navhome/cateList",
          component:CateList,
          meta:{
            showFooter:true
          },
          children:[{
            path:"/navhome/cateList/:id",
            component:Division,
            meta:{
              showFooter:true
            }
          },
          {
            path:"",
            redirect:"/navhome/cateList/1022001"
          }
          ]
        },
        {
          path:"/navhome/cart",
          component:ShopCart,
          meta:{
            showFooter:true
          }
        },
        {
          path:"/navhome/person",
          component:Person
        },
        {
          path:"",
          redirect:"/navhome/home"
        }
      ]
    },
    {
      path:"",
      redirect:"/interlayer"
    }
  ]
})
