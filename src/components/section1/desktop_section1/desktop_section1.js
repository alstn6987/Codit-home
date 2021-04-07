import React from "react";
import btn_bill from "../../../iamges/btn-bill@3x.png";
import btn_covid from "../../../iamges/btn-covid@3x.png";
import btn_estate from "../../../iamges/btn-estate@3x.png";
import btn_politician from "../../../iamges/btn-politician@3x.png";
import btn_insight from "../../../iamges/btn-insight@3x.png";
import { Link } from "react-router-dom";
import "./desktop_section1.scss";

const DesktopSection1 = () => {
  return (
    <div className="DesktopSection1">
      <Link to="/">
        <figure>
          <img src={btn_bill} alt="bill" />
          <figcaption>
            <b>의안 검색</b> 및 <b>모니터링</b>
          </figcaption>
        </figure>
      </Link>
      <Link to="/app/covid19">
        <figure>
          <img src={btn_covid} alt="covid" />
          <figcaption>코로나19 정책 및 입법</figcaption>
        </figure>
      </Link>
      <Link to="/">
        <figure>
          <img src={btn_estate} alt="estate" />
          <figcaption>부동산 정책 및 입법</figcaption>
        </figure>
      </Link>
      <Link to="/">
        <figure>
          <img src={btn_politician} alt="politician" />
          <figcaption>국회의원 정보</figcaption>
        </figure>
      </Link>
      <Link to="/app/insights">
        <figure>
          <img src={btn_insight} alt="insight" />
          <figcaption>인사이트</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default DesktopSection1;
