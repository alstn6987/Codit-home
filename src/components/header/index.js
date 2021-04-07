import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./desktop_header/desktop_header";
import MobileHeader from "./mobile_header/mobile_header";
import TabletHeader from "./tablet_header/tablet_header";

const Header = () => {
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
      {isTablet && <TabletHeader />}
      {isMobile && <MobileHeader />}
      {isDesktop && <DesktopHeader />}
    </>
  );
};

export default Header;
