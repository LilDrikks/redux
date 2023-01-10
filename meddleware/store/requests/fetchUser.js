import { userError, userStarted, userSuccess } from "../user.js";

const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(userStarted());
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    dispatch(userSuccess(data));
  } catch (error) {
    dispatch(userError(error.message));
  }
};

export default fetchUser;