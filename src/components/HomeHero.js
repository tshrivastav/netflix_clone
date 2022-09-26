import React from "react";
import Hero from "./Hero";
import Search from "./Search";

const HomeHero = () => {
  return (
    <Hero>
      <div className="w-full text-white flex flex-col px-5 space-y-2 justify-center items-center text-center md:space-y-6">
        <h1 className="text-2xl md:text-7xl font-bold">
          Unlimitted movies, TV
          <br />
          shows, and more.
        </h1>
        <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
        <Search />
      </div>
    </Hero>
  );
};

export default HomeHero;
