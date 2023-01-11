import React from "react";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner";
import GetReview from "./GetReview";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
          <Products />
          <GetReview />
          <Reviews/>
    </div>
  );
};

export default Home;
