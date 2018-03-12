import axios from "axios";
import Ip from "~/api/config.json";
import { createAction } from "redux-actions";

export const receive_hotels = createAction("RECEIVE_HOTELS");

export const get_hotels = () => dispatch => {
  axios
    .get(`http://${Ip.ip}:3030/almundo/hotel`)
    .then(response => dispatch(receive_hotels(response.data.hotels)))
    .catch(error => {
      console.log(error);
      console.log(error.request);
    });
};

export const create_store_structure = () => dispatch => dispatch(get_hotels());
