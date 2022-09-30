import React from "react";
import bgImg from "../assests/background.jpg";

const Hero = ({ children, bg }) => {
  return (
    <div
      style={{
        width: "100%",
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%),
         url(${bg || bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "100px 0 ",
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
