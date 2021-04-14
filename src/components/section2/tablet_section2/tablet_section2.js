// 데이터 현황 표기 섹션

import React from "react";
import "./tablet_section2.scss";

const month = 3;

const billNumber = 80462;
const billnumber_c = billNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const policyNumber = 48495;
const policyNumber_c = policyNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const lawNumber = 5045;
const lawNumber_c = lawNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const precedentNumber = 81246;
const precedentNumber_c = precedentNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const ordinanceNumber = 121272;
const ordinanceNumber_c = ordinanceNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const newsNumber = 45584403;
const newsNumber_c = newsNumber
  .toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

const TabletSection2 = () => {
  return (
    <div className="TabletSection2">
      <div>
        <div className="container1">
          <h1>
            <b>코딧</b>의 <b>데이터</b> 현황
          </h1>
          <h2>2021년 {month}월 기준</h2>
        </div>
        <div className="container2">
          <div className="bill">
            <div className="number">{billnumber_c}</div>
            <div>의안</div>
          </div>
          <div className="policy">
            <div className="number">{policyNumber_c}</div>
            <div>정책</div>
          </div>
          <div className="law">
            <div className="number">{lawNumber_c}</div>
            <div>법률</div>
          </div>
          <div className="precedent">
            <div className="number">{precedentNumber_c}</div>
            <div>판례</div>
          </div>
          <div className="ordinance">
            <div className="number">{ordinanceNumber_c}</div>
            <div>조례</div>
          </div>
          <div className="news">
            <div className="number">{newsNumber_c}</div>
            <div>뉴스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletSection2;
