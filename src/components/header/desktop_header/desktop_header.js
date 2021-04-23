import React, { useState, useEffect } from "react";
import "./desktop_header.scss";
import arrow_down from "../../../iamges/ios-arrow-down.svg";
import top_share from "../../../iamges/icon-top-share.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

const DesktopHeader = () => {
  const location = useLocation();
  const [rangActive, setRang] = useState(false);
  let isAuthorized = sessionStorage.getItem("isAuthorized");
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem("isAuthorized");
    console.log(sessionStorage.removeItem("isAuthorized"));
    history.push("/");
    window.scrollTo(0, 0);
  };

  useEffect((e) => {}, [isAuthorized]);
  return (
    <>
      <div className="DesktopHeader">
        <button id="subscription">뉴스레터 구독</button>
        <Link to="/app/about">
          <button id="introduce">회사소개</button>
        </Link>
        {location.pathname !== "/signin" && (
          <div>
            {isAuthorized ? (
              <button id="log-out" onClick={logOut}>
                로그아웃
              </button>
            ) : (
              <Link to="/signin">
                <button id="log-in">로그인</button>
              </Link>
            )}
          </div>
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

export default DesktopHeader;
