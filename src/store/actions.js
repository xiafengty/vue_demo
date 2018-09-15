
import {
  REQ_TAG_LIST,
  REQ_TOPIC_LIST,
  REQ_NAV_LIST
} from "./type-mutations"

import {
  reqTagList,
  reqTopicList,
  reqNavList
} from "../api"
export default {
  async getTagList({commit}){
    const result=await reqTagList();
    if(result.code===0){
      const tagList = result.data.tagList;
      const newItemNewUserList = result.data.newItemNewUserList;
      const popularItemList = result.data.popularItemList;
      const topicList = result.data.topicList;
      const cateList = result.data.cateList;
      commit(REQ_TAG_LIST,{
        tagList,
        newItemNewUserList,
        popularItemList,
        topicList,
        cateList
      });
    }
  },
  async getTopicList({commit}){
    const result = await reqTopicList();
    if(result.code===0){
      const banner = result.data.banner;
      const column = result.data.column;
      const recommend = result.data.recommend;
      const tenFifteen = result.data.tenfifteen;
      const zhenItem = result.data.zhen;
      const yxLook = result.data.yxLook;
      const yxWeek = result.data.yxWeek;
      commit(REQ_TOPIC_LIST,{
        banner,
        column,
        recommend,
        tenFifteen,
        zhenItem,
        yxLook,
        yxWeek
      })
    }
  },
  async getCateList({commit}){
    const result = await reqNavList();
    if(result.code===0){
      const categoryL1List = result.data.categoryL1List;
      commit(REQ_NAV_LIST,{categoryL1List});
    }
  }
}
