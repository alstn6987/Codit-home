import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLogin from "./desktop_login/desktop_login";

const Login = () => {
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
        {isDesktop && <DesktopLogin />}
      </>
    </>
  );
};

export default Login;
