import React from "react";
import { Redirect } from "react-router-dom";

const BillScreen = () => {
  let isAuthorized = sessionStorage.getItem("isAuthorized");

  return <>{!isAuthorized ? <Redirect to="/signin" /> : <Redirect to="/" />}</>;
};

export default BillScreen;
