import React from "react";
import DashboardHero from "../components/DashboardHero";
import GreyBorder from "../components/GreyBorder";
import Header from "../components/Header";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";

const Dashboard = () => {
  return (
    <div>
      <Header isDashboard />
      <DashboardHero />
      <Popular />
      <TopRated />
      <Popular />

      <Upcoming />
      <GreyBorder />
    </div>
  );
};

export default Dashboard;
