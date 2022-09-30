import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";
const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(api.popular);
    setPopularMovies(results);
  };

  return (
    <DashboardSection title="Most Popular Movies" movies={popularMovies} />
  );
};

export default Popular;
