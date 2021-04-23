import axios from "axios";

export const loginAction = {
  success,
  failure,
  requested,
  login,
};

function success(user) {
  console.log(user);
  return {
    type: "LOGIN_SUCCESS",
    user: user,
  };
}

function failure() {
  return {
    type: "LOGIN_FAILURE",
  };
}

function requested(bool = false) {
  return {
    type: "LOGIN_REQUEST",
    loading: bool,
  };
}

function login(user) {
  return async (dispatch) => {
    dispatch(requested(true));
    axios
      .post("http://localhost:4000/login", user)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(requested(false));
        console.log(response);
        return response;
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(success(response.data.user));
        } else dispatch(failure());
      })
      .catch((e) => dispatch(failure()));
  };
}
