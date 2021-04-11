import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopFooter from "./desktop_footer/desktop_footer";

const Footer = () => {
  const isMobile = useMediaQuery({
    maxWidth: 375,
  });

  const isTablet = useMediaQuery({
    minWidth: 376,
    maxWidth: 800,
  });

  const isDesktop = useMediaQuery({
    minWidth: 801,
  });

  return (
    <>
      <>
        {/* {isTablet && }
        {isMobile && } */}
        {isDesktop && <DesktopFooter />}
      </>
    </>
  );
};

export default Footer;
