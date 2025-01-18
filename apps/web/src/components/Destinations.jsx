import React from "react";
import Images from "./Images";
import { destinations } from "../../public/assets/assets";
const Destinations = () => {

  return (
    <>
      <Images images={destinations} header={"Top Vacation Destinations"} />
    </>
  );
};

export default Destinations;
