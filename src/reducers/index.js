import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import { loginReducer } from "./login.reducer";
const allReducer = combineReducers({
  alertReducer,
  loginReducer,
});

export default allReducer;
