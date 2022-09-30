import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";
const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const {
      data: { results },
    } = await axios.get(api.topRated);
    setTopRated(results);
  };

  return <DashboardSection title="Top Rated Movies" movies={topRated} />;
};

export default TopRated;
