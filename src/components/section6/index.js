import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection6 from "./desktop_section6/desktop_section6";
import TabletSection6 from "./tablet_section6/tablet_section6";

const Section6 = () => {
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
      {/* {isMobile && } */}
      {isTablet && <TabletSection6 />}

      {isDesktop && <DesktopSection6 />}
    </>
  );
};

export default Section6;
