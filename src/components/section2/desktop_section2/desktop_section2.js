import React from "react";
import "./desktop_section2.scss";

const month = 3;
const billNumber = 80462;
const policyNumber = 48495;
const lawNumber = 5045;
const precedentNumber = 81246;
const ordinanceNumber = 121272;
const newsNumber = 45584403;

const DesktopSection2 = () => {
  return (
    <div className="DesktopSection2">
      <div>
        <h1>코딧의 데이터 현황</h1>
        <h2>2021년 {month}월 기준</h2>
        <div className="wrapper">
          <div className="bill">
            {billNumber}
            <div>의안</div>
          </div>
          <div className="policy">
            {policyNumber}
            <div>정책</div>
          </div>
          <div className="law">
            {lawNumber}
            <div>법률</div>
          </div>
          <div className="precedent">
            {precedentNumber}
            <div>판례</div>
          </div>
          <div className="ordinance">
            {ordinanceNumber}
            <div>조례</div>
          </div>
          <div className="news">
            {newsNumber}
            <div>뉴스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSection2;
