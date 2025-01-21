import React from "react";
import RootLayout from "./layout";
import Home from "../components/Home";
import Content from '../components/Content'
export default function Page() {
  return (
    <div>
<Home bgImg={"bg-hero"}><Content/></Home>
    </div>
  );
}
Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
