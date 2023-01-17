import { imageError, imageSuccess, imageStarted } from '../images.js'

const fetchImage = () => async (dispatch) => {
    try {
        dispatch(imageStarted());
        const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=3&_user=0`, {
            method: "GET",

        });

        const res = await response.json();
        dispatch(imageSuccess(res));
    } catch (error) {
        dispatch(imageError(error.message));
    }
};

export default fetchImage;
