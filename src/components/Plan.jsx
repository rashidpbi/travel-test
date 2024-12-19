import React from "react";
import TravelExpert from "../assets/TravelExpert.png";
const Plan = () => {
  return (
    <div className="relative w-10/12 h-52 md:w-10/12  md:h-72  overflow-hidden rounded-lg  mt-20 mx-auto  ">
      <img
        src={TravelExpert}
        alt=""
        className="absolute  w-full h-full object-cover"
      />
      <div className="absolute  text-white left-6 md:left-16 top-7 md:top-20 ">
        <p className="text-3xl md:text-5xl font-medium">
          Plan your trip with travel expert
        </p>
        <p className="mt-7">
          Our professional advisors can craft your perfect itinerary
        </p>
      </div>
    </div>
  );
};

export default Plan;
