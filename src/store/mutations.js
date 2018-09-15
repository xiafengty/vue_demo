import {
  REQ_TAG_LIST,
  REQ_TOPIC_LIST,
  REQ_NAV_LIST
} from "./type-mutations"


export default {
  [REQ_TAG_LIST](state,{
    tagList,
    newItemNewUserList,
    popularItemList,
    topicList,
    cateList
  }){
      state.tagList=tagList;
      state.newItemNewUserList=newItemNewUserList;
      state.popularItemList=popularItemList;
      state.topicList=topicList;
      state.cateList=cateList;
  },
  [REQ_TOPIC_LIST](state,{
    banner,
    column,
    recommend,
    tenFifteen,
    zhenItem,
    yxLook,
    yxWeek,
  }){
    state.banner=banner;
    state.column=column;
    state.recommend=recommend;
    state.tenFifteen=tenFifteen;
    state.zhenItem=zhenItem;
    state.yxLook=yxLook;
    state.yxWeek=yxWeek;
  },
  [REQ_NAV_LIST](state,{categoryL1List}){
    state.categoryL1List=categoryL1List;
  }
}
