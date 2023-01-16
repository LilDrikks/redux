import user from "./user.js";
import token from "./token.js";
import thunk  from "./middlewares/thunk.js";
import localStorage from "./middlewares/localStorage.js";
import getStorage from "../store/helper/getStorage.js";

const form = document.querySelector('form')

const tokenExist = getStorage('token', null)

if(tokenExist){
  form.style.display = 'none'
}

const { compose, applyMiddleware, combineReducers, createStore } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const reducer = combineReducers({ user, token });

const store = createStore(reducer, enhancer);


export default store;
