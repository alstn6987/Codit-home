import React from "react";
import "./desktop_header.scss";
import arrow_down from "../../../iamges/ios-arrow-down.svg";
import top_share from "../../../iamges/icon-top-share.svg";
import { Link, useLocation } from "react-router-dom";

const DesktopHeader = () => {
  const location = useLocation();

  return (
    <>
      <div className="DesktopHeader">
        <button id="subscription">뉴스레터 구독</button>
        <Link to="/app/about">
          <button id="introduce">회사소개</button>
        </Link>
        {location.pathname !== "/signin" && (
          <Link to="/signin">
            <button id="log-in">로그인</button>
          </Link>
        )}
        <button id="rang">
          KR 
          <img src={arrow_down} alt="아래꺽쇠" />
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

export default DesktopHeader;
