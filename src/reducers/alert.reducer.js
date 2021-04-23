import { alertTypes } from "../types/alert.types";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertTypes.ALERT_SUCCESS:
      return {
        type: alertTypes.ALERT_SUCCESS,
        message: action.message,
      };
    case alertTypes.ALERT_ERROR:
      return {
        type: alertTypes.ALERT_ERROR,
        message: action.message,
      };
    case alertTypes.ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
