import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";
const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const {
      data: { results },
    } = await axios.get(api.upcoming);
    setUpcoming(results);
  };

  return <DashboardSection title="Upcoming Movies" movies={upcoming} />;
};

export default Upcoming;
