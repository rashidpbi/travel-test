import React from "react";
import Images from "./Images";
const Properties = ({properties}:any) => {

 
  return (
    <>
      <Images images={properties} header={"Browse by property type"} />
    </>
  );
};

export default Properties;
