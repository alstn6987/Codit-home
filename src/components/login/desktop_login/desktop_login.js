import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import codit_logo from "../../../iamges/logo-codit-search@2x.png";
import codit_footer_logo from "../../../iamges/icon-top-logo.svg";
import box_normal from "../../../iamges/box-login-normal.svg";
import box_selected from "../../../iamges/box-selected-login.svg";
import "./desktop_login.scss";
import axios from "axios";

const DesktopLogin = () => {
  const [posts, setPosts] = useState("1");

  const onSubmit = useEffect((e) => {
    // e.preventDefault();
    try {
      axios.post("http://localhost:4000/events").then((res) => {
        setPosts(res.data.id);
        console.log(posts);
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <div className="DesktopLogin">
      <div className="container">
        <img className="bigLogo" src={codit_logo} alt="codit-logo" />
        <form onSubmit={onSubmit}>
          <input type="email" placeholder="이메일 주소를 입력하세요"></input>
          <input type="password" placeholder="비밀번호를 입력하세요"></input>
          <div className="chackBoxSection">
            <span>
              <button type="button" onClick={console.log("체크박스 해제")}>
                <img src={box_normal} alt="check-box" />
              </button>
              <button type="button" onClick={console.log("체크박스 체크")}>
                <img src={box_selected} alt="check-box" />
              </button>
              이메일 저장하기
            </span>
            <span>비밀번호를 잊으셨나요?</span>
          </div>
          <button className="logIn">로그인</button>
        </form>
        <div className="joinSection">
          <span>코딧 서치에 처음 오셨나요?</span>
          <Link>
            <span>회원가입</span>
          </Link>
        </div>
        <div className="footerSection">
          <img src={codit_footer_logo} alt="codit_footer_logo" />
          <span>Copyright c 2020 CODIT Corp.All right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopLogin;