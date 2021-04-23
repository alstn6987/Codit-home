import { userTypes } from "../types/user.types";

const userReducer = (state, action) => {
  switch (action.type) {
    case userTypes.USER_AUTH_CHECK:
      return {};
    case userTypes.USER_DELETE:
      return {};
    case userTypes.USER_LOGIN:
      return {};
    case userTypes.USER_LOGOUT:
      return {};
    case userTypes.USER_REGISTER:
      return {};
    case userTypes.USER_UPDATE:
      return {};
  }
};

export default userReducer;
