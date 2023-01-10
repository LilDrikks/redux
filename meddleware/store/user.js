const FETCH_STARTED = "user/FETCH_STARTED";
const FETCH_SUCCESS = "user/FETCH_SUCCESS";
const FETCH_ERROR = "user/FETCH_ERROR";

export const userStarted = () => ({ type: FETCH_STARTED });
export const userSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });
export const userError = (payload) => ({ type: FETCH_ERROR, payload });

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const user = immer.produce((state = initialState, action) => {
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

export default user;
