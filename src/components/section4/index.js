import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection4 from "./desktop_section4/desktop_section4";
import MobileSection4 from "./mobile_section4/mobile_section4";
import TabletSection4 from "./tablet_section4/tablet_section4";

const Section4 = () => {
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
      {isMobile && <MobileSection4 />}
      {isTablet && <TabletSection4 />}
      {isDesktop && <DesktopSection4 />}
    </>
  );
};

export default Section4;
