import React from "react";
import { Link } from "react-router-dom";
import codit_logo from "../../../iamges/logo-codit-search@2x.png";
import codit_footer_logo from "../../../iamges/icon-top-logo.svg";
import "./desktop_login.scss";

const DesktopLogin = () => {
  return (
    <div className="DesktopLogin">
      <img src={codit_logo} alt="codit-logo" />
      <input type="email"></input>
      <input type="password"></input>
      <div>
        <span>이메일 저장하기</span>
        <span>비밀번호를 잊으셨나요?</span>
      </div>
      <button>로그인</button>
      <div>
        코딧 서치에 처음 오셨나요? <Link>회원가입</Link>
      </div>
      <div>
        <img src={codit_footer_logo} alt="codit_footer_logo" />
        <span></span>
      </div>
    </div>
  );
};

export default DesktopLogin;
