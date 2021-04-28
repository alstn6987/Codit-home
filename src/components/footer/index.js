import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopFooter from "./desktop_footer/desktop_footer";
import MobileFooter from "./mobile_footer/mobile_footer";
import TabletFooter from "./tablet_footer/tablet_footer";

const Footer = () => {
  const isMobile = useMediaQuery({
    maxWidth: 375,
  });

  const isTablet = useMediaQuery({
    minWidth: 376,
    maxWidth: 740,
  });

  const isDesktop = useMediaQuery({
    minWidth: 741,
  });

  return (
    <>
      <>
        {isMobile && <MobileFooter />}
        {isTablet && <TabletFooter />}
        {isDesktop && <DesktopFooter />}
      </>
    </>
  );
};

export default Footer;
