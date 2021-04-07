import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopBanner from "./desktop_banner/desktop_banner";

const Banner = () => {
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
        {isTablet && <DesktopBanner />}
        {isMobile && <DesktopBanner />}
        {isDesktop && <DesktopBanner />}
      </>
    </>
  );
};

export default Banner;
