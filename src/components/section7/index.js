import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection7 from "./desktop_section7/desktop_section7";

const Section7 = () => {
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
      {isDesktop && <DesktopSection7 />}
    </>
  );
};

export default Section7;
