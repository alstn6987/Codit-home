import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection2 from "./desktop_section2/desktop_section2";
import TabletSection2 from "./tablet_section2/tablet_section2";

const Section2 = () => {
  const isMobile = useMediaQuery({
    maxWidth: 375,
  });

  const isTablet = useMediaQuery({
    minWidth: 376,
    maxWidth: 1420,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1421,
  });

  return (
    <>
      {/* {isMobile && } */}
      {isTablet && <TabletSection2 />}
      {isDesktop && <DesktopSection2 />}
    </>
  );
};

export default Section2;
