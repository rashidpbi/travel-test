import React from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Categories from "./Categories";
import Destinations from "./Destinations";
import Content from "./Content";
const Hero = () => {
  return (
    <div className="bg-hero md:h-screen bg-cover bg-center ">
      <div className="p-6 ">
        <Navbar />
      </div>
        <div className="md:flex md:flex-col md:items-center  ">
          <Booking />
          <Categories />
        </div>
      
    </div>
  );
};

export default Hero;
