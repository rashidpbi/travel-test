import React from "react";
import Image from "next/image";

const Images = ({ images, header }: any) => {
  return (
    <div className="w-full  ">
      <div
        className={`text-2xl font-medium    ${
          header === "Top Vacation Destinations"
            ? "text-black md:text-white"
            : ""
        } `}
      >
        {header}
        
      </div>
      <div className="flex gap-10 overflow-x-scroll no-scrollbar mt-6  w-full  ">
        {images.map((image: any) => (
          <div
            key={image._id}
            className="relative  overflow-hidden rounded-lg shrink-0"
          >
            <div className="relative  w-80 h-44 overflow-hidden rounded-lg flex-shrink-0">
              <Image
                src={image.image}
                alt="image"
                className="absolute  w-full h-full object-cover"
                width={300}
                height={200}
                unoptimized={true}
              />
              <div className="absolute  text-white left-4 bottom-4">
                {image.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
