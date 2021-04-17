import React from "react";
import { Redirect } from "react-router-dom";

const BillScreen = () => {
  let isAuthorized = sessionStorage.getItem("isAuthorized");
  console.log(isAuthorized);
  return (
    <>
      {!isAuthorized ? <Redirect to="/signin" /> : <Redirect to="/app/bill" />}
    </>
  );
};

export default BillScreen;
