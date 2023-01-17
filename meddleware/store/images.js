const FETCH_STARTED = "image/FETCH_STARTED";
const FETCH_SUCCESS = "image/FETCH_SUCCESS";
const FETCH_ERROR = "image/FETCH_ERROR";

export const imageStarted = () => ({ type: FETCH_STARTED });
export const imageSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload
});
export const imageError = (payload) => ({ type: FETCH_ERROR, payload });

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const image = immer.produce((state = initialState, action) => {
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

export default image;
