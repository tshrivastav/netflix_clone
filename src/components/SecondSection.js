import React from "react";
import download from "../assests/mobile-0819.jpg";
import Section from "./Section";

const SecondSection = () => {
  return (
    <Section
      img={download}
      title="Download your shows to watch offline."
      body="Save your favourites easily and always have something to watch."
      reverse
    />
  );
};

export default SecondSection;
