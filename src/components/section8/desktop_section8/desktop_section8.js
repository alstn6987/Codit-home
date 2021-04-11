import React from "react";
import logo_government from "../../../iamges/logo-government@2x.png";
import logo_gpe from "../../../iamges/logo-gpe@2x.png";
import logo_glg from "../../../iamges/logo-glg@2x.png";
import "./desktop_section8.scss";

const DesktopSection8 = () => {
  return (
    <div className="DesktopSection8">
      <div className="container">
        <figure>
          <img src={logo_government} alt="행정안전부" />
          <figcaption>대한민국 행정안전부</figcaption>
        </figure>
        <figure>
          <img src={logo_gpe} alt="global partnership" />
          <figcaption>
            Global partnership for education (GPE, World bank)
          </figcaption>
        </figure>
        <figure>
          <img src={logo_glg} alt="GLG" />
          <figcaption>Gerson Lehrman Group</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default DesktopSection8;
