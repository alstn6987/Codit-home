import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection9 from "./desktop_section9/desktop_section9";

const Section9 = () => {
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
      {isDesktop && <DesktopSection9 />}
    </>
  );
};

export default Section9;
