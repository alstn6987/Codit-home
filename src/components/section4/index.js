import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection4 from "./desktop_section4/desktop_section4";

const Section4 = () => {
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
      {isDesktop && <DesktopSection4 />}
    </>
  );
};

export default Section4;
