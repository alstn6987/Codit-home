import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";

const allReducer = combineReducers({
  alertReducer,
});

export default allReducer;
