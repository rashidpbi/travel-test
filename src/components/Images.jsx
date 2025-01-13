import React from "react";
import ImageComp from "./ImageComp";
const Images = ({ images, header }) => {

  return (
    <div className="w-full  ">
      <div
        className={`text-2xl font-medium    ${
          header == "Top Vacation Destinations"
            ? "text-black md:text-white"
            : ""
        } `}
      >
        {header}
      </div>
      <div className="flex gap-10 overflow-x-scroll no-scrollbar mt-6  w-full  ">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative  overflow-hidden rounded-lg shrink-0"
          >
            <ImageComp image={image} />
          </div>
      )) } 
      </div>
    </div>
  );
};

export default Images;
