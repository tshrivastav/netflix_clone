import React from "react";
import kids from "../assests/kids.jpeg";
import Section from "./Section";

const FourthSection = () => {
  return (
    <Section
      title="Create profiles for children."
      body="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      img={kids}
      reverse
    />
  );
};

export default FourthSection;
