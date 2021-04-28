import React from "react";
import "./tablet_section7.scss";
import alert_img from "../../../iamges/alert-img@2x.png";
import img_comingsoon from "../../../iamges/img-comingsoon@2x.png";
import { useInView } from "react-intersection-observer";

const TabletSection7 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="TabletSection7">
      <div className="container" ref={ref}>
        <img
          className={`alert ${inView ? "isVisible" : ""}`}
          src={alert_img}
          alt="추적 및 예고"
        />
        <div className="textBlock">
          <img
            className="commingSoon"
            src={img_comingsoon}
            alt="comming soon"
          />
          <h1>
            추적 및 예고
            <br />
            (Track and Alert)
          </h1>
          <p>
            변경 사항을 추적하고
            <br />
            미리 입법 예고를 받을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabletSection7;
