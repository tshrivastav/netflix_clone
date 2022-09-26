import React from "react";
import FirstSection from "../components/FirstSection";
import FourthSection from "../components/FourthSection";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import GreyBorder from "./GreyBorder";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <GreyBorder />
      <FirstSection />
      <GreyBorder />
      <SecondSection />
      <GreyBorder />
      <ThirdSection />
      <GreyBorder />
      <FourthSection />
      <GreyBorder />
    </div>
  );
};

export default Home;
