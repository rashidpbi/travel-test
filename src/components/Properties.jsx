import React from 'react'
import { useData } from "../context/DataContext";
import Images from "./Images";
const Properties = () => {
    const { properties } = useData();
    return (
      <>
      <Images images={properties} header={"Browse by property type"}/>
      </>
    );
}

export default Properties
