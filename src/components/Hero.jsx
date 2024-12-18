import Navbar from "./Navbar";
import Booking from "./Booking";
import Categories from "./Categories";
import Destinations from "./Destinations";
import Content from "./Content";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import { useLocation  } from "react-router-dom";
const Hero = () => {
  const {bgImg,setBgImg} = useData()
  const location  = useLocation()

  useEffect(()=>{
    console.log("pathname:",location.pathname)
switch(location.pathname){
  case '/mountains':
    setBgImg('bg-mountains')
  break;
    default:
      setBgImg('bg-hero')
      break;
}

  },[location.pathname,setBgImg])
  return (
    <div className={`${bgImg}  md:h-screen bg-cover bg-center `}>
      <div className="p-6 ">
        <Navbar />
      </div>
        <div className="md:flex md:flex-col md:items-center  ">
          <Booking />
          <Categories />
        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    </div>
  );
};

export default Hero;
  