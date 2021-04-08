import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection3 from "./desktop_section3/desktop_section3";

const Section3 = () => {
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
      {/* {isTablet && }
      {isMobile && } */}
      {isDesktop && <DesktopSection3 />}
    </>
  );
};

export default Section3;
