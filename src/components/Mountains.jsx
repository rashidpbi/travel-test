import React from "react";
import Container from "./Container";
import { useData } from "../context/DataContext";
import PackageCard from "./PackageCard";
import { mountHoneymoon, mountInclusive } from "../assets/assets";

const Mountains = () => {
  const { mountDestinations, mountRecents } = useData();
  return (
    <div>
      <Container
        header={"Popular Beach Destinations"}
        datas={mountDestinations}
        Component={PackageCard}
      />

      <Container
        header={"Recently Viewed"}
        datas={mountRecents}
        Component={PackageCard}
      />

      <Container
        header={"All Inclusive Packages!"}
        datas={mountInclusive}
        Component={PackageCard}
      />
      <Container
        header={"Honeymoon Freebies Special"}
        datas={mountHoneymoon}
        Component={PackageCard}
      />
    </div>
  );
};

export default Mountains;
