import store from "./store/configureStore.js";
import fetchToken from "./store/requests/fetchToken.js";
import fetchUser from "./store/requests/fetchUser.js";

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(fetchToken(user));
  }
  state = store.getState();
  await store.dispatch(fetchUser(state.token.data));
  state = store.getState();
};

login({ username: "dog", password: "dog" });

