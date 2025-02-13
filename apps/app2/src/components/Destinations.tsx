import React, { useEffect, useState } from "react";
import Images from "./Images";
import axios from "axios";
const Destinations = () => {
   const [destinations,setDestinations] = useState([])
  useEffect(()=>{
    const fetchDestinations = async()=>{
      const response = await axios.get("http://localhost:3300/api/destinations");
      const result = response.data;
      setDestinations(result)
    }
    fetchDestinations()
  },[])
  if(destinations.length==0)return <>...loading</>
  else
  return (
    <>  
      <Images images={destinations} header={"Top Vacation Destinations"} />
    </>
  );
};

export default Destinations;
