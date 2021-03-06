import React from "react";
import btn_bill from "../../../iamges/btn-bill@3x.png";
import btn_covid from "../../../iamges/btn-covid@3x.png";
import btn_estate from "../../../iamges/btn-estate@3x.png";
import btn_politician from "../../../iamges/btn-politician@3x.png";
import btn_insight from "../../../iamges/btn-insight@3x.png";
import { Link } from "react-router-dom";
import "./tablet_section1.scss";

const TabletSection1 = () => {
  return (
    <div className="TabletSection1">
      <Link to="/app/bill">
        <figure>
          <img src={btn_bill} alt="bill" />
          <figcaption>
            <em>의안 검색</em> 및 <em>모니터링</em>
          </figcaption>
        </figure>
      </Link>
      <Link to="/app/covid19">
        <figure>
          <img src={btn_covid} alt="covid" />
          <figcaption>
            <em>코로나19</em> 정책 및 입법
          </figcaption>
        </figure>
      </Link>
      <Link to="/">
        <figure>
          <img src={btn_estate} alt="estate" />
          <figcaption>
            <em>부동산</em> 정책 및 입법
          </figcaption>
        </figure>
      </Link>
      <Link to="/">
        <figure>
          <img src={btn_politician} alt="politician" />
          <figcaption>
            <em>국회의원</em> 정보
          </figcaption>
        </figure>
      </Link>
      <Link to="/app/insights">
        <figure>
          <img src={btn_insight} alt="insight" />
          <figcaption>
            <em>인사이트</em>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default TabletSection1;
