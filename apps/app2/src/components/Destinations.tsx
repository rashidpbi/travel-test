import React, { useEffect, useState } from "react";
import Images from "./Images";
import Upload from "./Upload";

const Destinations = ({ destinations }: any) => {
 const [isOpen,setIsOpen]= useState(false)
  return (
    <>
      <Images images={destinations} header={"Top Vacation Destinations"} isOpen={isOpen} setIsOpen={setIsOpen} />
     <Upload isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Destinations;
