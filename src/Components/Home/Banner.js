import React from "react";
// import banner from '../asset/ronix-tools-Nn2mg1lUbZc-unsplash.jpg'
import img1 from "../../asset/img19.jpg";
import img11 from "../../asset/img8.jpg";
import img12 from "../../asset/img15.jpg";
import img7 from "../../asset/img18.jpg";
import img9 from "../../asset/img9.jpg";

const Banner = () => {
  return (
    <div className="relative z-10">
      <div
        className="hero  h-[80vh]"
        style={{ backgroundImage: `url(${img9})` }}
      >
        <div className="hero-overlay  bg-opacity-20"></div>
        <div className="hero-content text-center text-secondary">
          <div className="">
            <h1 className=" lg:text-5xl text-3xl  text-white font-bold">
              We Provide The Best Product
            </h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt deleniti magni corrupti earum! Est aliquam temporibus corporis dolores quibusdam soluta, recusandae vero modi quia reprehenderit ea voluptatibus, dolor quod.</p> */}
          </div>
        </div>
      </div>
      {/* card item */}
      <div className="rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-300 shadow-lg  w-3/4">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-12 pt-4">
          <figure>
            <img
              style={{ height: "150px" }}
              src={img11}
              alt="Shoes"
              className="rounded-2xl"
            />
            <h1>Customizable wrench</h1>
          </figure>

          <figure>
            <img
              style={{ height: "150px" }}
              src={img12}
              alt="Shoes"
              className="rounded - 2xl"
            />
            <h1>Electric saw</h1>
          </figure>

          <figure>
            <img
              style={{ height: "150px" }}
              src={img7}
              alt="Shoes"
              className="rounded-2xl"
            />
            <h1>Hammer</h1>
          </figure>

          <figure>
            <img
              style={{ height: "150px" }}
              src={img1}
              alt="Shoes"
              className="rounded-2xl"
            />
            <h1>Electric Driller</h1>
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Banner;
