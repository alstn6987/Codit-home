import React from "react";
import "./desktop_section7.scss";
import alert_img from "../../../iamges/alert-img@2x.png";

const DesktopSection7 = () => {
  return (
    <div className="DesktopSection7">
      <div>
        <h1>추적 및 예고 (Track and Alert)</h1>
        <p>변경 사항을 추적하고 미리 입법 예고를 받을 수 있습니다.</p>
      </div>
      <img src={alert_img} alt="원스탑 플랫폼" />
    </div>
  );
};

export default DesktopSection7;
