import axios from "axios";
import { createAction } from "redux-actions";

export const receive_hotels = createAction("RECEIVE_HOTELS");

export const get_hotels = () => dispatch => {
  axios
    .get("http://localhost:3030/almundo/hotel")
    .then(response => dispatch(receive_hotels(response.data.hotels)))
    .catch(error => console.log(error));
};

export const create_store_structure = () => dispatch => dispatch(get_hotels());
