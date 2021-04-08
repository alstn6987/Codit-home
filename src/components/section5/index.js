import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection5 from "./desktop_section5/desktop_section5";

const Section5 = () => {
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
      {isDesktop && <DesktopSection5 />}
    </>
  );
};

export default Section5;
