import React from "react";
import img1 from '../../asset/img15.jpg'
import img2 from '../../asset/img14.jpg'
const Arrival = () => {
  return (
    <div className="lg:flex gap-x-4 px-12 grid gap-y-5">
      <div className="hero " style={{ backgroundImage: `url(${img1})` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-secondary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              GET READY <br />
              <span className="text-5xl text-yellow-500 font-bold">
                FOR NEW ARRIVAL
              </span>
            </h1>

            <button className="btn btn-primary">SEE MORE</button>
          </div>
        </div>
      </div>

      <div className="hero " style={{ backgroundImage: `url(${img2})` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-secondary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              COMMING <br />
              <span className="text-5xl text-yellow-500 font-bold">
                OUR NEW BRAND{" "}
              </span>
            </h1>

            <button className="btn btn-primary">SEE MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
