import React from "react";
import Image from "next/image";

const ImageComp = ({ image }:any) => {
  return (
    <div className="relative  w-80 h-44 overflow-hidden rounded-lg flex-shrink-0">
      <Image
        src={image.image[0].src}
        alt="image"
        className="absolute  w-full h-full object-cover"
        width={300}
        height={200}
      />
      <div className="absolute  text-white left-4 bottom-4">{image.name}</div>
    </div>
  );
};

export default ImageComp;
