import React, { useEffect, useState } from "react";
import Destinations from "./Destinations";
import Properties from "./Properties";
import Plan from "./Plan";
import CommunityCard from "./CommunityCard";
import Contact from "./Contact";
import Container from "./Container";
import OfferCard from "./OfferCard";
const Content = ({ data,destinationsData}: any) => {
  const { properties,offers,communities,travelExpert} = data
   const destinations = destinationsData.destinations
  
  return (
    <div>
     
      <div className="flex flex-col gap-20 ml-6 md:ml-32 md:mb-32">
        <Destinations destinations={destinations}/>

        <Container header={"Offers"} datas={offers} Component={OfferCard} />
        <Properties  properties={properties}/>

        <Plan travelExpert = {travelExpert} />

        <Container
          header={"Connect with other travelers in our community"}
          datas={communities}
          Component={CommunityCard}
        />
      </div>
      <Contact />
     
      
    </div>
  );
};

export default Content;
