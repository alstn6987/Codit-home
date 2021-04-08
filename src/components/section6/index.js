import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection6 from "./desktop_section6/desktop_section6";

const Section6 = () => {
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
      {isDesktop && <DesktopSection6 />}
    </>
  );
};

export default Section6;
