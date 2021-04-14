import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopFooter from "./desktop_footer/desktop_footer";
import TabletFooter from "./tablet_footer/tablet_footer";

const Footer = () => {
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
      <>
        {/* {isMobile && } */}
        {isTablet && <TabletFooter />}
        {isDesktop && <DesktopFooter />}
      </>
    </>
  );
};

export default Footer;
