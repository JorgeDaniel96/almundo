import axios from "axios";
import App from "~/src/app/app";
import Ip from "~/api/config.json";
import { createAction } from "redux-actions";

export const add_to_favorites = createAction("ADD_TO_FAVORITES");

const get_hotel_by_id = hotelId => dispatch => {
  axios
    .get(`http://${Ip.ip}:3030/almundo/hotel/${hotelId}`)
    .then(response => dispatch(add_to_favorites(response.data.hotel)))
    .catch(error => console.log(error));
};

export const add_hotel_to_favorites = hotelId => dispatch => {
  dispatch(get_hotel_by_id(hotelId));
  App.goBack();
};
