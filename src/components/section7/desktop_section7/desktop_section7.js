import React from "react";
import "./desktop_section7.scss";
import alert_img from "../../../iamges/alert-img@2x.png";
import img_comingsoon from "../../../iamges/img-comingsoon@2x.png";

const DesktopSection7 = () => {
  return (
    <div className="DesktopSection7">
      <div className="container">
        <img className="alert" src={alert_img} alt="추적 및 예고" />

        <div className="textBlock">
          <img
            className="commingSoon"
            src={img_comingsoon}
            alt="comming soon"
          />
          <h1>추적 및 예고 (Track and Alert)</h1>
          <p>변경 사항을 추적하고 미리 입법 예고를 받을 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopSection7;
