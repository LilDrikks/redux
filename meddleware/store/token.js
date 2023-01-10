import getStorage from "./helper/getStorage.js";

const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

export const tokenStarted = () => ({ type: FETCH_STARTED });
export const tokenSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
  localStorage: "token",
});
export const tokenError = (payload) => ({ type: FETCH_ERROR, payload });

const initialState = {
  loading: false,
  data: getStorage('token', null),
  error: null,
};

const token = immer.produce((state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      state.loading = true;
      break;
    case FETCH_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      break;
    case FETCH_ERROR:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      break;
    default:
      return state;
  }
});

export default token;
