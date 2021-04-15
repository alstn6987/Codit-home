import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection2 from "./desktop_section2/desktop_section2";
import MobileSection2 from "./mobile_section2/mobile_section2";
import TabletSection2 from "./tablet_section2/tablet_section2";

const Section2 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 720,
  });

  const isTablet = useMediaQuery({
    minWidth: 721,
    maxWidth: 1420,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1421,
  });

  return (
    <>
      {isMobile && <MobileSection2 />}
      {isTablet && <TabletSection2 />}
      {isDesktop && <DesktopSection2 />}
    </>
  );
};

export default Section2;
