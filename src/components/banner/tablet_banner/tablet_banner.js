import React from "react";
import codit_search from "../../../iamges/codit-search-2@3x.png";
import "./tablet_banner.scss";

const TabletBanner = () => {
  return (
    <div className="TabletBanner">
      <img src={codit_search} alt="코딧 서치" />
      <div>법·규제·정책 데이터 지능 플랫폼</div>
    </div>
  );
};

export default TabletBanner;
