// import App from "../../App";

import { ClientOnly } from "./client"

export function generateStaticParams() {
    return [{ slug: [] }]
  }

export default function Page(){
    return <h1><ClientOnly/></h1>
}