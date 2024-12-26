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
    <div>
      <div className="flex flex-col gap-20 ml-6 md:ml-32 md:mb-32">
        <Destinations />

        <Container header={"Offers"} datas={offers} Component={OfferCard} />
        <Properties />

        <Plan />

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
