import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSection7 from "./desktop_section7/desktop_section7";
import TabletSection7 from "./tablet_section7/tablet_section7";

const Section7 = () => {
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
      {/* {isMobile && }       */}
      {isTablet && <TabletSection7 />}

      {isDesktop && <DesktopSection7 />}
    </>
  );
};

export default Section7;
