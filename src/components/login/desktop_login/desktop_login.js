import React, { useState } from "react";
import { Link } from "react-router-dom";
import codit_logo from "../../../iamges/logo-codit-search@2x.png";
import codit_footer_logo from "../../../iamges/icon-top-logo.svg";
import "./desktop_login.scss";
import axios from "axios";

const DesktopLogin = () => {
  const [posts, setPosts] = useState("1");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(posts);
    try {
      axios.post("http://localhost:4000/events").then((res) => {
        setPosts(res.data.id);
        console.log(posts);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="DesktopLogin">
      <div className="container">
        <img className="bigLogo" src={codit_logo} alt="codit-logo" />
        <form onSubmit={onSubmit}>
          <input type="email"></input>
          <input type="password"></input>
          <div className="chackBoxSection">
            <span>이메일 저장하기</span>
            <span>비밀번호를 잊으셨나요?</span>
          </div>
          <button className="logIn">로그인</button>
        </form>
        <div className="joinSection">
          코딧 서치에 처음 오셨나요? <Link>회원가입</Link>
        </div>
        <div>
          <img src={codit_footer_logo} alt="codit_footer_logo" />
          <span>Copyright c 2020 CODIT Corp.All right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopLogin;
