import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection2 from "./desktop_section2/desktop_section2";

const Section2 = () => {
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
      {isDesktop && <DesktopSection2 />}
    </>
  );
};

export default Section2;
