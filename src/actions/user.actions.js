import { userTypes } from "../types/user.types";

export const userActions = {
  login,
  authorizeCheck,
  logout,
  register,
  userDelete,
  update,
};

function login() {
  return { type: userTypes.USER_LOGIN };
}

function authorizeCheck() {
  return { type: userTypes.USER_AUTH_CHECK };
}

function logout() {
  return { type: userTypes.USER_LOGOUT };
}
function register() {
  return { type: userTypes.USER_REGISTER };
}

function userDelete(id) {
  return { type: userTypes.USER_DELETE };
}
function update(id) {
  return { type: userTypes.USER_UPDATE };
}
