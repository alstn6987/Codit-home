import React, { useState, useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./desktop_header.scss";
import arrow_down from "../../../iamges/ios-arrow-down.svg";
import top_share from "../../../iamges/icon-top-share.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDropdown } from "../../../Lib/useDropdown";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const DesktopHeader = () => {
  const location = useLocation();
  let isAuthorized = sessionStorage.getItem("isAuthorized");
  const history = useHistory();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDropdown(dropdownRef, false);

  const logOut = () => {
    sessionStorage.removeItem("isAuthorized");
    console.log(sessionStorage.removeItem("isAuthorized"));
    history.push("/");
    window.scrollTo(0, 0);
  };
  const onClick = () => setIsActive(!isActive);

  useEffect((e) => {}, [isAuthorized]);
  return (
    <>
      <div className="DesktopHeader">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
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
        <button id="rang" onClick={onClick}>
          KR 
          <img
            src={arrow_down}
            alt="아래꺽쇠"
            style={
              isActive
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0)" }
            }
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="container">
            <div className="KR">
              <b>Korean-KR</b>
            </div>
            <div className="EN">
              <b>English-EN</b>
            </div>
          </div>
        </nav>

        {location.pathname === "/" && (
          <CopyToClipboard
            text={"https://thecodit.com/"}
            onCopy={() =>
              toast("링크가 복사되었습니다.", {
                toastId: "toast",
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              })
            }
          >
            <button id="link-copy">
              <img src={top_share} alt="링크공유" />
            </button>
          </CopyToClipboard>
        )}
      </div>
    </>
  );
};

export default DesktopHeader;
