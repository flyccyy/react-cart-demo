import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from "./actionType";
let list = JSON.parse(window.localStorage.getItem("goodslist"));
export default (state = list, action) => {
  switch (action.type) {
    //加入购物车
    case ADD_GOODS:
      const ADDLIST = JSON.parse(JSON.stringify(state));
      let oldObj = ADDLIST.find(item => item.id === action.goods.id);
      if (oldObj) {
        oldObj.num += action.goods.num;
      } else {
        ADDLIST.push(action.goods);
      }
      return ADDLIST;
    //更改商品数量
    case UPDATE_GOODS:
      const UPDATELIST = JSON.parse(JSON.stringify(state));
      let updateObj = UPDATELIST.find(item => item.id === action.goods.id);
      updateObj.num = action.goods.num;
      return UPDATELIST;
    //删除商品
    case DELETE_GOODS:
      const DELETELIST = JSON.parse(JSON.stringify(state));
      let index = DELETELIST.findIndex(item => item.id === action.id);
      DELETELIST.splice(index, 1);
      return DELETELIST;
    default:
      return state;
  }
};
