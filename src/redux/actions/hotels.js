import axios from "axios";
import { createAction } from "redux-actions";

export const fetch_hotels = createAction("FETCH_HOTELS");

export const get_store_hotels = () => dispatch => {
  axios
    .get("http://localhost:3030/hotels")
    .then(response => dispatch(fetch_hotels(response.data.hotels)))
    .catch(error => console.log(error));
};

export const create_store_structure = () => dispatch =>
  dispatch(get_store_hotels());
