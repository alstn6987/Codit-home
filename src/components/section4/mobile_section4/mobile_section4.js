import React from "react";
import "./mobile_section4.scss";
import issue_img from "../../../iamges/issue-img@2x.png";
import ios_arrow from "../../../iamges/ios-arrow.svg";
import ios_arrow2 from "../../../iamges/ios-arrow2.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const MobileSection4 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div className="MobileSection4">
      <div className="container" ref={ref}>
        <img
          className={`issue ${inView ? "isVisible" : ""}`}
          src={issue_img}
          alt="이슈"
        />
        <div className="textBlock">
          <h1>특정 이슈별 정보 모아보기</h1>
          <p>
            코로나19, 부동산 정책 및 입법 등의
            <br />
            주요 주제별로 정책 및 법안을
            <br />
            모아보거나 검색할 수 있습니다.
          </p>
          <div className="linkWrapper">
            <Link to="/">
              <span className="colorTextGreen">
                코로나19 정책 및 입법타임라인
              </span>
              으로 이동
              <img className="linkImg" src={ios_arrow} alt="초록 화살표" />
            </Link>
          </div>
          <div className="linkWrapper">
            <Link to="/">
              <span className="colorTextSkyblue">
                부동산 정책 및 입법타임라인
              </span>
              으로 이동
              <img className="linkImg" src={ios_arrow2} alt="하늘색 화살표" />
            </Link>
          </div>
          <p className="grayColor">※금융,바이오,디지털 영역 추가 예정</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSection4;
