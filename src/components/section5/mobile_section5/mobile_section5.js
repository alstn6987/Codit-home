import React from "react";
import "./mobile_section5.scss";
import recommendation_img from "../../../iamges/recommendation-img.svg";
import { useInView } from "react-intersection-observer";

const MobileSection5 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="MobileSection5">
      <div className="container" ref={ref}>
        <img
          className={`recommendation ${inView ? "isVisible" : ""}`}
          src={recommendation_img}
          alt="추천"
        />
        <div className="textBlock">
          <h1>
            맞춤형 추천 시스템
            <br />
            (Recommendation system)
          </h1>
          <p>
            인공지능이 키워드 추출,
            <br />
            정보를 분석 및 추천합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSection5;
