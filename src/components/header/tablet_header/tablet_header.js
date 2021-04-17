import React, { useState } from "react";
import arrow_down from "../../../iamges/ios-arrow-down.svg";
import top_share from "../../../iamges/icon-top-share.svg";
import { Link, useLocation } from "react-router-dom";
import "./tablet_header.scss";

const TabletHeader = () => {
  const location = useLocation();
  const [rangActive, setRang] = useState(false);
  return (
    <>
      <div className="TabletHeader">
        <button id="subscription">뉴스레터 구독</button>
        <Link to="/app/about">
          <button id="introduce">회사소개</button>
        </Link>
        {location.pathname !== "/signin" && (
          <Link to="/signin">
            <button id="log-in">로그인</button>
          </Link>
        )}
        <button id="rang" onClick={() => setRang(!rangActive)}>
          KR 
          <img
            src={arrow_down}
            alt="아래꺽쇠"
            style={
              rangActive
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0)" }
            }
          />
        </button>
        {location.pathname === "/" && (
          <button id="link-copy">
            <img src={top_share} alt="링크공유" />
          </button>
        )}
      </div>
    </>
  );
};
export default TabletHeader;
