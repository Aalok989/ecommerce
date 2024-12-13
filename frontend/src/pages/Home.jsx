import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection.jsx";
import BestSeller from "../components/BestSeller.jsx";
import OurPolicies from "../components/OurPolicies.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicies/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
