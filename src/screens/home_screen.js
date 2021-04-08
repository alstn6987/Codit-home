import React from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default HomeScreen;
