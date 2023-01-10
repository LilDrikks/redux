const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  const result = next(action);
  return result;
};

export default thunk;
