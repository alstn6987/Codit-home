const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.user,
      };
    case "LOGIN_FAILURE":
      return {};
    case "LOGIN_REQUEST":
      return {
        loading: action.loading,
      };
    default:
      return state;
  }
};
