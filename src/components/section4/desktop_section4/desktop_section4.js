import React from "react";
import "./desktop_section4.scss";
import issue_img from "../../../iamges/issue-img@2x.png";

const DesktopSection4 = () => {
  return (
    <div className="DesktopSection4">
      <div>
        <h1>특정 이슈별 정보 모아보기</h1>
        <p>
          코로나19, 부동산 정책 및 입법 등의
          <br />
          주요 주제별로 정책 및 법안을 모아보거나 검색할 수 있습니다.
        </p>
        <p>※금융,바이오,디지털 영역 추가 예정</p>
      </div>
      <img src={issue_img} alt="이슈" />
    </div>
  );
};

export default DesktopSection4;
