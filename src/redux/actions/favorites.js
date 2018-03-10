import App from "~/src/app/app";
import { createAction } from "redux-actions";

export const add_to_favorites = createAction("ADD_TO_FAVORITES");

export const add_hotel_to_favorites = hotelInfo => dispatch => {
  dispatch(add_to_favorites(hotelInfo));
  App.goBack();
};

export const delete_from_favorites = createAction("DELETE_FROM_FAVORITES");
