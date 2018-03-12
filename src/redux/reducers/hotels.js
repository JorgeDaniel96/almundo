import { handleActions } from "redux-actions";

const initialState = {
  hotels: {}
};

const actionMap = {};

actionMap.RECEIVE_HOTELS = (state, action) => {
  const newState = {
    ...state,
    hotels: action.payload
  };

  return newState;
};

export default handleActions(actionMap, initialState);
