import { combineReducers } from "redux";
import favorites from "./favorites";
import hotels from "./hotels";

const rootReducer = combineReducers({
  hotels,
  favorites
});

export default rootReducer;
