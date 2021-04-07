import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection1 from "./desktop_section1/desktop_section1";

const Section1 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 375,
  });

  const isTablet = useMediaQuery({
    minWidth: 376,
    maxWidth: 800,
  });

  const isDesktop = useMediaQuery({
    minWidth: 801,
  });

  return (
    <>
      {isTablet && <DesktopSection1 />}
      {isMobile && <DesktopSection1 />}
      {isDesktop && <DesktopSection1 />}
    </>
  );
};

export default Section1;
