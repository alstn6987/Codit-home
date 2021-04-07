import React from "react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const MobileHeaderStyle = {
    display: "flex",
    height: "100px",
    width: "100%",
    backgroundColor: "red",
  };
  return (
    <>
      <div style={MobileHeaderStyle}>
        <Link to="/signin"></Link>
      </div>

      <div className="header">
        <div className="header title"></div>
        <div className="header subtitle"></div>
      </div>
    </>
  );
};

export default MobileHeader;
