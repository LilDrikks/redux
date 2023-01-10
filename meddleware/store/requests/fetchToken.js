import { tokenError, tokenStarted, tokenSuccess } from "../token.js";

const fetchToken = (body) => async (dispatch) => {
  try {
    dispatch(tokenStarted());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const { token } = await response.json();
    dispatch(tokenSuccess(token));
  } catch (error) {
    dispatch(tokenError(error.message));
  }
};

export default fetchToken;
