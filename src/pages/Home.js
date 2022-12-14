import React from "react";
import FAQSection from "../components/FAQSection";
import FirstSection from "../components/FirstSection";
import FourthSection from "../components/FourthSection";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import GreyBorder from "../components/GreyBorder";

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
      <FAQSection />
      <GreyBorder />
    </div>
  );
};

export default Home;
