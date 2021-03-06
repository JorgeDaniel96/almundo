import { handleActions } from "redux-actions";

const initialState = {
  hotels: []
};

const actionMap = {};

function addToFavorites(prevHotel, payload) {
  const newHotels = Object.assign({}, prevHotel);
  if (prevHotel[payload._id]) {
    return prevHotel;
  }
  newHotels[payload._id] = {
    id: payload._id,
    name: payload.name,
    stars: payload.stars,
    image: payload.image,
    price: payload.price,
    address: payload.address,
    amenities: payload.amenities
  };

  return newHotels;
}

actionMap.ADD_TO_FAVORITES = (state, action) => ({
  ...state,
  hotels: addToFavorites(state.hotels, action.payload)
});

export default handleActions(actionMap, initialState);
