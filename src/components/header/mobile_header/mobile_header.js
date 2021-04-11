import React from "react";
import { Link } from "react-router-dom";
import arrow_down from "../../../iamges/ios-arrow-down.svg";
import top_share from "../../../iamges/icon-top-share.svg";
import "./mobile_header.scss";

const MobileHeader = () => {
  return (
    <div className="MobileHeader">
      <button className="btn" id="subscription">
        뉴스레터 구독
      </button>
      <Link to="/app/about">
        <button className="btn" id="introduce">
          회사소개
        </button>
      </Link>
      <Link to="/signin">
        <button className="btn" id="log-in">
          로그인
        </button>
      </Link>
      <button className="btn" id="rang">
        KR 
        <img src={arrow_down} alt="아래꺽쇠" />
      </button>
      <button className="btn" id="link-copy">
        <img src={top_share} alt="링크공유" />
      </button>
    </div>
  );
};

export default MobileHeader;
