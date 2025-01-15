// import App from "../../App";

import Content from "../src/components/Content"
import Home from "../src/pages/Home"


export function generateStaticParams() {
    return [{ slug: [''] }]
  }

export default function Page(){
    return (
      <div className="">
        <Home bgImg={"bg-hero"}>
          <Content/>
        </Home>
      </div>
    )
}