

export default {
    needTagList(state){
      state.tagList.length=4;
      return state.tagList
    },
    setTime(state){
      let data=new Date();
      let hour=data.getHours();
      let minute=data.getMinutes();
      let second=data.getSeconds();
      state.times.hour=hour;
      state.times.minute=minute;
      state.times.second=second;
    },
    setCategory(state){
      let categoryL1Lists =state.categoryL1List;
      let category = [];
      let small = [];
      for(let i=0;i<categoryL1Lists.length;i++){
        let name = categoryL1Lists[i].name;
        let id =  categoryL1Lists[i].id;
        if(small.length===0){
          category.push(small);
        }
        small.push(name);
        small.push(id);
        if(small.length===2){
          small = [];
        }
      }
      state.category=category;
    }
}
