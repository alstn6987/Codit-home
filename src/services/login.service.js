import React from "react";
import { useDispatch, useSelecter } from "react-redux";
import { loginAction } from "../actions";

const login = (data) => {
  const user = useSelecter((state) => state.loginReducer);
  const dispatch = useDispatch();

  dispatch(loginAction.login(data));
};
