import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from "./actionType";
export const addGoods = goods => {
  return {
    type: ADD_GOODS,
    goods
  };
};
export const updateGoods = goods => {
  return {
    type: UPDATE_GOODS,
    goods
  };
};
export const deleteGoods = id => {
  return {
    type: DELETE_GOODS,
    id
  };
};
//删除模拟异步操作
export const deleteGoodsAsync = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(deleteGoods(id));
    }, 1000);
  };
};
