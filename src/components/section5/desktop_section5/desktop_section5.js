import React from "react";
import "./desktop_section5.scss";
import recommendation_img from "../../../iamges/recommendation-img.svg";

const DesktopSection5 = () => {
  return (
    <div className="DesktopSection5">
      <div>
        <h1>
          맞춤형 추천 시스템
          <br />
          (Recommendation system)
        </h1>
        <p>인공지능이 키워드 추출, 정보를 분석 및 추천합니다.</p>
      </div>
      <img src={recommendation_img} alt="추천" />
    </div>
  );
};

export default DesktopSection5;
