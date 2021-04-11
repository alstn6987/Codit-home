import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection1 from "./desktop_section1/desktop_section1";
import MobileSection1 from "./mobile_section1/mobile_section1";

const Section1 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 500,
  });

  const isTablet = useMediaQuery({
    minWidth: 500,
    maxWidth: 800,
  });

  const isDesktop = useMediaQuery({
    minWidth: 801,
  });

  return (
    <>
      {/* {isTablet && } */}
      {isMobile && <MobileSection1 />}
      {isDesktop && <DesktopSection1 />}
    </>
  );
};

export default Section1;
