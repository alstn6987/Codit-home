import axios from "axios";

export const loginAction = {
  success,
  failure,
  requested,
  login,
};

function success(user) {
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

const login = async (user) => {
  return (dispatch) => {
    dispatch(request(true));
    axios
      .post("http://localhost:4000/login", user)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(requested(false));
        return response;
      })
      .then((response) => {
        if (response.account) dispatch(success(response.user));
        else dispatch(failure());
      })
      .catch(() => dispatch(failure()));
  };
};
