import user from "./user.js";
import token from "./token.js";
import image from "./images.js";
import thunk  from "./middlewares/thunk.js";
import localStorage from "./middlewares/localStorage.js";


const { compose, applyMiddleware, combineReducers, createStore } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const reducer = combineReducers({ user, token, image });

const store = createStore(reducer, enhancer);


export default store;
