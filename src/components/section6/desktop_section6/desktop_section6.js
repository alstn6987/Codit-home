import React from "react";
import "./desktop_section6.scss";
import politician_img from "../../../iamges/politician-img@2x.png";
import ios_arrow3 from "../../../iamges/ios-arrow3.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const DesktopSection6 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="DesktopSection6">
      <div className="container" ref={ref}>
        <img
          className={`politician ${inView ? "isVisible" : ""}`}
          src={politician_img}
          alt="국회의원"
        />

        <div className="textBlock">
          <h1>국회의원 검색</h1>
          <p>국회의원 300명의 정보 및 활동을 확인할 수 있습니다.</p>
          <div className="linkWrapper">
            <Link to="/">
              <span className="colorTextPurple">국회의원 검색</span>
              으로 이동
              <img className="linkImg" src={ios_arrow3} alt="자주색 화살표" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSection6;
