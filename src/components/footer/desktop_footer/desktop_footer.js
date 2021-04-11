import React from "react";
import "./desktop_footer.scss";
import logo_footer from "../../../iamges/logo-footer.svg";
import facebook from "../../../iamges/facebook.svg";
import twitter from "../../../iamges/twitter.svg";
import instagram from "../../../iamges/instagram.svg";
import youtube from "../../../iamges/youtube.svg";
import blog from "../../../iamges/blog.svg";
import icon_mail from "../../../iamges/icon-mail.svg";

const DesktopFooter = () => {
  return (
    <div className="DesktopFooter">
      <div className="container">
        <div className="containerLeft">
          <img src={logo_footer} alt="코딧" />
          <div>
            <div>서비스 이용약관</div>
            <hr />
            <div>개인정보처리방침</div>
          </div>
          <div>
            <div>(주)코딧</div>
            <hr />
            <div>대표이사:정지은</div>
            <hr />
            <div>사업자 등록번호:328-86-01935</div>
          </div>
          <div>주소:서울시 강남구 논현로 74, 402-1호</div>
          <div>
            <div>TEL:070 8065 2184</div>
            <hr />
            <div>EMAIL:info@thecodit.com</div>
          </div>
          <div>Copyright c 2020 CODIT Corp.All right Reserved</div>
        </div>
        <div className="containerRight">
          <button>
            <img src={icon_mail} alt="icon_mail" />
            문의하기
          </button>
          <div className="logos">
            <img src={facebook} alt="logo_facebook" />
            <img src={twitter} alt="logo_twitter" />
            <img src={instagram} alt="logo_instagram" />
            <img src={youtube} alt="logo_youtube" />
            <img src={blog} alt="logo_blog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
