import React from "react";

const OfferCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-7  rounded-lg shadow-md mx-4 my-6">
      <div className="w-80 h-60 rounded-xl overflow-hidden">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col  w-80 h-60 justify-between">
        <p className="text-shade">{data.name}</p>
        <p className="font-bold text-3xl">{data.p1}</p>
        <p className="text-shade">{data.p2}</p>
        <div className="flex items-center justify-center bg-blue-800 text-white w-40 h-12 rounded-full text-center">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
