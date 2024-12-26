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
    <div className="flex flex-col ">
      <div className="">
        <Destinations />

        <Container header={"Offers"} datas={offers} Component={OfferCard} />
        <Properties />
        <div>
          <Plan />
        </div>
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
