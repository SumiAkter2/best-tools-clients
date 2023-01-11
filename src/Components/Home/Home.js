import React from "react";
import Reviews from "../Reviews/Reviews";
import About from "./About";
import Banner from "./Banner";
import GetReview from "./GetReview";
import Products from "./Products";
import Summary from './Summary'
const Home = () => {
  return (
    <div>
      <Banner />
          <Products />
          <GetReview />
          <Reviews />
          <Summary />
          <About
    </div>
  );
};

export default Home;
