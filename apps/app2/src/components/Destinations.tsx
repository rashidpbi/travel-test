import React, { useEffect, useState } from "react";
import Images from "./Images";
const Destinations = ({ destinations }: any) => {
  return (
    <>
      <Images images={destinations} header={"Top Vacation Destinations"} />
    </>
  );
};

export default Destinations;
