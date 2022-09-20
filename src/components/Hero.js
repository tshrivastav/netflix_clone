import React from "react";
import bg from "../assests/background.jpg";

const Hero = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%), url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "200px 0 0 0 ",
      }}
    >
      {children}
    </div>
  );
};

export default Hero;
