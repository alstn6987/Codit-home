import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection5 from "./desktop_section5/desktop_section5";
import MobileSection5 from "./mobile_section5/mobile_section5";
import TabletSection5 from "./tablet_section5/tablet_section5";

const Section5 = () => {
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
      {isMobile && <MobileSection5 />}
      {isTablet && <TabletSection5 />}
      {isDesktop && <DesktopSection5 />}
    </>
  );
};

export default Section5;
