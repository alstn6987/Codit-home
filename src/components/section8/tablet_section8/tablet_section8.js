import React from "react";
import logo_government from "../../../iamges/logo-government@2x.png";
import logo_gpe from "../../../iamges/logo-gpe@2x.png";
import logo_glg from "../../../iamges/logo-glg@2x.png";
import "./tablet_section8.scss";
import { useInView } from "react-intersection-observer";

const TabletSection8 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="TabletSection8">
      <div className="container" ref={ref}>
        <figure className={`${inView ? "isVisible" : ""}`}>
          <img src={logo_government} className="miso" alt="행정안전부" />
          <figcaption>대한민국 행정안전부</figcaption>
        </figure>
        <figure className={`${inView ? "isVisible" : ""}`}>
          <img src={logo_gpe} className="gpe" alt="global partnership" />
          <figcaption>
            Global partnership for education
            <br />
            (GPE, World bank)
          </figcaption>
        </figure>
        <figure className={`${inView ? "isVisible" : ""}`}>
          <img src={logo_glg} className="glg" alt="GLG" />
          <figcaption>Gerson Lehrman Group</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TabletSection8;
