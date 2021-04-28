import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection8 from "./desktop_section8/desktop_section8";
import MobileSection8 from "./mobile_section8/mobile_section8";
import TabletSection8 from "./tablet_section8/tablet_section8";

const Section8 = () => {
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
      {isMobile && <MobileSection8 />}
      {isTablet && <TabletSection8 />}
      {isDesktop && <DesktopSection8 />}
    </>
  );
};

export default Section8;
