// 데이터 현황 표기 섹션

import React from "react";
import "./mobile_section2.scss";
import AnimatedNumber from "animated-number-react";
import { useInView } from "react-intersection-observer";

const month = 3;
const billNumber = 80462;
const policyNumber = 48495;
const lawNumber = 5045;
const precedentNumber = 81246;
const ordinanceNumber = 121272;
const newsNumber = 45584403;

const changeNumber = (value) => {
  return value
    .toFixed(0)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const MobileSection2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div className="MobileSection2">
      <div>
        <div className="container1">
          <h1>
            <b>코딧</b>의 <b>데이터</b> 현황
          </h1>
          <h2>2021년 {month}월 기준</h2>
        </div>
        <div className={`container2 ${inView ? "isVisible" : ""}`} ref={ref}>
          <div className="bill">
            <div className="number">
              {inView && (
                <AnimatedNumber value={billNumber} formatValue={changeNumber} />
              )}
            </div>
            <div>의안</div>
          </div>
          <div className="policy">
            <div className="number">
              {inView && (
                <AnimatedNumber
                  value={policyNumber}
                  formatValue={changeNumber}
                />
              )}
            </div>
            <div>정책</div>
          </div>
          <div className="law">
            <div className="number">
              {inView && (
                <AnimatedNumber value={lawNumber} formatValue={changeNumber} />
              )}
            </div>
            <div>법률</div>
          </div>
          <div className="precedent">
            <div className="number">
              {inView && (
                <AnimatedNumber
                  value={precedentNumber}
                  formatValue={changeNumber}
                />
              )}
            </div>
            <div>판례</div>
          </div>
          <div className="ordinance">
            <div className="number">
              {inView && (
                <AnimatedNumber
                  value={ordinanceNumber}
                  formatValue={changeNumber}
                />
              )}
            </div>
            <div>조례</div>
          </div>
          <div className="news">
            <div className="number">
              {inView && (
                <AnimatedNumber value={newsNumber} formatValue={changeNumber} />
              )}
            </div>
            <div>뉴스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection2;
