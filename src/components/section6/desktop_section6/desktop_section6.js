import React from "react";
import "./desktop_section6.scss";
import politician_img from "../../../iamges/politician-img@2x.png";

const DesktopSection6 = () => {
  return (
    <div className="DesktopSection6">
      <div>
        <h1>국회의원 검색</h1>
        <p>국회의원 300명의 정보 및 활동을 확인할 수 있습니다.</p>
      </div>
      <img src={politician_img} alt="국회의원" />
    </div>
  );
};

export default DesktopSection6;
