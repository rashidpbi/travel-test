import React from "react";
import Images from "./Images";
import { properties } from "../../public/assets/assets";
const Properties = () => {
  return (
    <>
      <Images images={properties} header={"Browse by property type"} />
    </>
  );
};

export default Properties;
