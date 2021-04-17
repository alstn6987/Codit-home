import React from "react";
import "./desktop_section3.scss";
import allinone_img from "../../../iamges/allinone-img@2x.png";

const DesktopSection3 = () => {
  return (
    <div className="DesktopSection3">
      <div className="container">
        <img className="allinone" src={allinone_img} alt="원스탑 플랫폼" />

        <div className="textBlock">
          <h1>원스탑 플랫폼(All-in-one)</h1>
          <p>의안 및 정책 정보를 한 곳에서 확인하고 검색할 수 있습니다.</p>
          <p className="grayColor">※법률,규제,판례,조례 추가 예정</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopSection3;
