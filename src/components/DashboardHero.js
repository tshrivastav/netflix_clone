import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../config/api_config";
import axios from "axios";

const DashboardHero = () => {
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(api.upcoming);

    const ran = Math.floor(Math.random() * results.length);

    setBgImage(api.base_url + results[ran].backdrop_path);
  };

  return (
    <Hero bg={bgImage}>
      <div className="text-white flex flex-col px-5 space-y-2 justify-center items-center md:space-y-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Unlimitted movies, TV <br />
          shows, and more.
        </h1>
        <p className="md:text-2xl">Watch Anywhere. Cancel Anytime.</p>
        <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
          Watch Trailer
        </button>
      </div>
    </Hero>
  );
};

export default DashboardHero;
