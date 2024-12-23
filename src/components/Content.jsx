import React from "react";
import Destinations from "./Destinations";
import Properties from "./Properties";
import Plan from "./Plan";
import CommunityCard from "./CommunityCard";
import Contact from "./Contact";
import Container from "./Container";
import { useData } from "../context/DataContext";
import OfferCard from "./OfferCard";
const Content = () => {
  const { offers, communities } = useData();
  return (
    <div className="">
      <div className=" md:transform md:-translate-y-[11vh] ">
        <Destinations />
      </div>

      <Container header={"Offers"} datas={offers} Component={OfferCard} />
      <Properties />
      <Plan />
      <Container
        header={"Connect with other travelers in our community"}
        datas={communities}
        Component={CommunityCard}
      />
      <Contact />
    </div>
  );
};

export default Content;
