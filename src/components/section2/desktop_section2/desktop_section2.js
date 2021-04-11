// 데이터 현황 표기 섹션

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
        <div className="container1">
          <h1>
            <b>코딧</b>의 <b>데이터</b> 현황
          </h1>
          <h2>2021년 {month}월 기준</h2>
        </div>
        <div className="container2">
          <div className="bill">
            <div className="number">{billNumber}</div>
            <div>의안</div>
          </div>
          <div className="policy">
            <div className="number">{policyNumber}</div>
            <div>정책</div>
          </div>
          <div className="law">
            <div className="number">{lawNumber}</div>
            <div>법률</div>
          </div>
          <div className="precedent">
            <div className="number">{precedentNumber}</div>
            <div>판례</div>
          </div>
          <div className="ordinance">
            <div className="number">{ordinanceNumber}</div>
            <div>조례</div>
          </div>
          <div className="news">
            <div className="number">{newsNumber}</div>
            <div>뉴스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSection2;
