const FETCH_STARTED = 'user/FETCH_STARTED'
const FETCH_SUCCESS = 'user/FETCH_SUCCESS'
const FETCH_ERROR = 'user/FETCH_ERROR'

export const userStarted = () => ({ type: FETCH_STARTED })
export const userSuccess = () => ({ type: FETCH_SUCCESS })
export const userError = () => ({ type: FETCH_ERROR })

export const user = { username: 'dog', password: 'dog' }

const reduxUser = immer.produce((state, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      console.log(action.type);
      break;
    default:
      return state;
  }
}, user)


export default reduxUser;