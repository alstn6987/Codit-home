import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection3 from "./desktop_section3/desktop_section3";
import MobileSection3 from "./mobile_section3/mobile_section3";
import TabletSection3 from "./tablet_section3/tablet_section3";

const Section3 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 375,
  });

  const isTablet = useMediaQuery({
    minWidth: 376,
    maxWidth: 1024,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1025,
  });

  return (
    <>
      {isMobile && <MobileSection3 />}
      {isTablet && <TabletSection3 />}
      {isDesktop && <DesktopSection3 />}
    </>
  );
};

export default Section3;
