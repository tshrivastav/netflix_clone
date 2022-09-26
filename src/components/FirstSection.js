import React from "react";
import tv from "../assests/tv.jpeg";
import Section from "./Section";

const FirstSection = () => {
  return (
    <Section
      title="Enjoy on your TV."
      body="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more."
      img={tv}
    />
  );
};

export default FirstSection;
