import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection8 from "./desktop_section8/desktop_section8";

const Section8 = () => {
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
      {isDesktop && <DesktopSection8 />}
    </>
  );
};

export default Section8;
