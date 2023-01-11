import React from "react";
import Reviews from "../Reviews/Reviews";
import About from "./About";
import Arrival from "./Arrival";
import Banner from "./Banner";
import GetReview from "./GetReview";
import HotDeals from "./HotDeals";
import Products from "./Products";
import Subscribe from "./Subscribe";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
          <Products />
          <GetReview />
          <Reviews />
          <Summary />
          <About />
          <HotDeals/>
      <Arrival />
      <Subscribe/>
          </div>
  );
};

export default Home;
