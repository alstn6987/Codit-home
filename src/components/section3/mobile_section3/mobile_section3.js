import React from "react";
import "./mobile_section3.scss";
import allinone_img from "../../../iamges/allinone-img@2x.png";
import { useInView } from "react-intersection-observer";

const MobileSection3 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="MobileSection3">
      <div className="container" ref={ref}>
        <img
          className={`allinone ${inView ? "isVisible" : ""}`}
          src={allinone_img}
          alt="원스탑 플랫폼"
        />
        <div className="textBlock">
          <h1>원스탑 플랫폼(All-in-one)</h1>
          <p>
            의안 및 정책 정보를 한 곳에서
            <br />
            확인하고 검색할 수 있습니다.
          </p>
          <p className="grayColor">※법률,규제,판례,조례 추가 예정</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSection3;
