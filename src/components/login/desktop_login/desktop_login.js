import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import codit_logo from "../../../iamges/logo-codit-search@2x.png";
import codit_footer_logo from "../../../iamges/icon-top-logo.svg";
import box_normal from "../../../iamges/box-login-normal.svg";
import box_selected from "../../../iamges/box-selected-login.svg";
import "./desktop_login.scss";
import axios from "axios";

const DesktopLogin = () => {
  const [checkActive, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginState, setLoginState] = useState("");
  const emailRegex = /\S+@\S+.\S+/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const history = useHistory();

  const validateEmail = (event) => {
    setEmail(event.target.value);
    if (!emailRegex.test(email)) {
      setEmailError("email 부적절");
    } else {
      setEmailError("");
    }
  };
  const vaildatePassword = (event) => {
    setPassword(event.target.value);
    if (!passwordRegex.test(password)) {
      setPasswordError("password 부적절");
    } else {
      setPasswordError("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    // setLoginState("waiting");
    try {
      axios.post("http://localhost:4000/login", data).then((res) => {
        setLoginState(res.data);
      });
    } catch (error) {
      console.log(error.message);
      console.log("로그인 실패");
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    if (loginState === "accountOk") {
      sessionStorage.setItem("isAuthorized", true);
      history.push("/");
    } else if (loginState === "accountWrong") {
      alert("로그인 실패");
    }
  }, [loginState]);

  useEffect(() => {}, []);

  const onCheck = () => setCheck(!checkActive);

  return (
    <div className="DesktopLogin">
      <div className="container">
        <img className="bigLogo" src={codit_logo} alt="codit-logo" />
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => validateEmail(e)}
          ></input>
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}

          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => vaildatePassword(e)}
          ></input>
          {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}

          <div className="chackBoxSection">
            <span>
              {!checkActive ? (
                <button type="button" onClick={onCheck}>
                  <img src={box_normal} alt="check-box" />
                </button>
              ) : (
                <button type="button" onClick={onCheck}>
                  <img src={box_selected} alt="check-box" />
                </button>
              )}
              이메일 저장하기
            </span>
            <Link>
              <span className="searchAccount">비밀번호를 잊으셨나요?</span>
            </Link>
          </div>
          <button className="logIn">로그인</button>
        </form>
        <div className="joinSection">
          <span>코딧 서치에 처음 오셨나요?</span>
          <Link>
            <span className="signUp">회원가입</span>
          </Link>
        </div>
        <div className="footerSection">
          <img src={codit_footer_logo} alt="codit_footer_logo" />
          <span>
            Copyright c 2020 <b>CODIT</b> Corp.All right Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopLogin;
