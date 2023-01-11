import React from "react";
import Banner from "./Banner";
import GetReview from "./GetReview";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
          <Products />
          <GetReview/>
    </div>
  );
};

export default Home;
