import React from "react";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";

import "./Home.styles.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homeComponent">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default Home;
