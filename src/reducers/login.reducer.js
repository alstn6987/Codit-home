const initialState = {
  user: "",
  authorize: false,
  loading: false,
};

export const loginReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        authorize: true,
      };
    case "LOGIN_FAILURE":
      return { ...state, authorize: false };
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
