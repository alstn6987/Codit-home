import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection1 from "./desktop_section1/desktop_section1";
import MobileSection1 from "./mobile_section1/mobile_section1";
import TabletSection1 from "./tablet_section1/tablet_section1";

const Section1 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 440,
  });

  const isTablet = useMediaQuery({
    minWidth: 441,
    maxWidth: 1024,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1025,
  });

  return (
    <>
      {isMobile && <MobileSection1 />}
      {isTablet && <TabletSection1 />}
      {isDesktop && <DesktopSection1 />}
    </>
  );
};

export default Section1;
