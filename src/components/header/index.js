import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./desktop_header/desktop_header";
import MobileHeader from "./mobile_header/mobile_header";
import TabletHeader from "./tablet_header/tablet_header";

const Header = () => {
  const isMobile = useMediaQuery({
    maxWidth: 540,
  });

  const isTablet = useMediaQuery({
    minWidth: 541,
    maxWidth: 1024,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1025,
  });

  return (
    <>
      {isTablet && <TabletHeader />}
      {isMobile && <MobileHeader />}
      {isDesktop && <DesktopHeader />}
    </>
  );
};

export default Header;
