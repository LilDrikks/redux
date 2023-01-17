import { tok } from "../../index.js";
import getStorage from "../helper/getStorage.js";

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  let state = store.getState()
  const result = next(action);
  state = store.getState()
  const token = getStorage('token', null)
  if(token){
    tok()
  }
  const content = document.querySelector('#content')
  console.log(content)
  
  state.image?.data?.map((item) => {
    console.log(item)
  })
  return result;
};

export default thunk;
