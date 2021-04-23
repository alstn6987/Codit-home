import { alertTypes } from "../types/alert.types";



export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return { type: alertTypes.ALERT_SUCCESS, message };
}

function error(message) {
  return { type: alertTypes.ALERT_ERROR, message };
}

function clear() {
  return { type: alertTypes.ALERT_CLEAR };
}
