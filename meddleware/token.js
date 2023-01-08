import { user } from "./user.js"

const FETCH_STARTED = 'token/FETCH_STARTED'
const FETCH_SUCCESS = 'token/FETCH_SUCCESS'
const FETCH_ERROR = 'token/FETCH_ERROR'

export const tokenStarted = () => ({ type: FETCH_STARTED })
export const tokenSuccess = () => ({ type: FETCH_SUCCESS })
export const tokenError = () => ({ type: FETCH_ERROR })

const response = await fetch(
  'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  },
);
  
export const { token } = await response.json();
  

const dataToken = {
  token: ''
}

const reduxToken = immer.produce((state, action) => {
  switch(action.type){
    case FETCH_STARTED:
      state.token = token
      break;
    default:
      state
  }
}, dataToken)

export default reduxToken;