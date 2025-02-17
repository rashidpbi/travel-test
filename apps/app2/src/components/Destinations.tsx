import React, { useEffect, useState } from "react";
import Images from "./Images";
import axios from "axios";
const Destinations = ({destinations}:any) => {
  //  const [destinations,setDestinations] = useState([])



  // useEffect(()=>{
  //   const fetchDestinations = async()=>{
  //     try {
  //       const response = await axios.get("http://localhost:3200/api/destinations");
  //     const result = response.data;
  //     setDestinations(result)
  //     } catch (error) {
  //       console.log(error)
  //     }
      
  //   }
  //   fetchDestinations()
  // },[])
  // if(destinations.length<1)return <>...loading</>
  // else
  return (
    <>  
      <Images images={destinations} header={"Top Vacation Destinations"} />
      
    </>
  );
};

export default Destinations;
