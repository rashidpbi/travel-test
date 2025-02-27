import React, { useState } from "react";
import RootLayout from "./layout";
import Home from "../components/Home";
import Content from "../components/Content";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const getServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3200/api/home");
    const result = response.data;
    const destinationsResponse = await axios.get(
      "http://localhost:3200/api/destinations/get"
    );
    const destinationsResult = destinationsResponse.data;

    console.log("destinationsResult: ", destinationsResult);
    return {
      props: { result: result, destinationsResult: destinationsResult },
    };
  } catch (error) {
    console.log(error);
    return { props: { result: null, destinationsResult: [] } };
  }
};
export default function Page({ result, destinationsResult }) {
  return (
    <div>
      <Home bgImg={"bg-hero"}>
        <Content data={result} destinationsData={destinationsResult} />
      </Home>
    </div>
  );
}
Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
