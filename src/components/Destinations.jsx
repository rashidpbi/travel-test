import React from "react";
import { useData } from "../context/DataContext";
import Images from "./Images";

const Destinations = () => {
  const { destinations } = useData();
  return (
    <>
    <Images images={destinations} header={"Top Vacation Destinations"}/>
    </>
  );
};

export default Destinations;
