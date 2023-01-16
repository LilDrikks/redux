import store from "./store/configureStore.js";

import fetchToken from "./store/requests/fetchToken.js";
import fetchUser from "./store/requests/fetchUser.js";


const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const btnLogin = document.querySelector('#btnLogin')



const handleLogin = (e) => {
  e.preventDefault()
  const loginValue = loginInput.value
  const passwordValue = passwordInput.value
  login({ username: loginValue, password: passwordValue }); 
}

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(fetchToken(user));
  }
  state = store.getState();
  await store.dispatch(fetchUser(state.token.data));
  state = store.getState();
};

btnLogin.addEventListener('click', handleLogin)





