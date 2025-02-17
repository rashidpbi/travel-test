import React from "react";
import RootLayout from "./layout";
import Home from "../components/Home";
import Content from "../components/Content";
import axios from "axios";
export const getStaticProps = async () => {
  try {
    const response = await axios.get("http://localhost:3200/api/home");
    const result = await response.data

    return {props:{result: result}}
  } catch (error) {
    console.log(error);
  }
};
export default function Page({result}) {
  return (
    <div>
      <Home bgImg={"bg-hero"}>
        <Content data = {result}/>
      </Home>
    </div>
  );
}
Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
