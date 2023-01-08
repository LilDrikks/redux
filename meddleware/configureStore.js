import reduxUser from "./user.js";
import reduxToken from "./token.js";
import { tokenError, tokenStarted } from "./token.js";
import { token } from "./token.js";

if(token){
   const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
     method: 'GET',
     headers: {
       Authorization: 'Bearer ' + token,
     },
   });
   const data = await response.json();
   console.log(data);
}


const logger = (store) => (next) => (action) => {
  const {getState, dispatch} = store
  let state = getState();
  console.log(action);
  
  const result = next(action);
  state = getState();
  console.log(state.reduxToken);
  return result;
};

const { compose, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const reducer = Redux.combineReducers({ reduxUser, reduxToken });

const store = Redux.createStore(reducer, enhancer);

store.dispatch(tokenStarted())

export default store;
