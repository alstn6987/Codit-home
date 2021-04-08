import React from "react";
import { useMediaQuery } from "react-responsive";

const Section8 = () => {
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
      {/* {isTablet && }
      {isMobile && } */}
      {isDesktop && <DesktopSection8 />}
    </>
  );
};

export default Section8;
