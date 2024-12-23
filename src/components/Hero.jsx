import Navbar from "./Navbar";
import Booking from "./Booking";
import Categories from "./Categories";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Destinations from "./Destinations";
const Hero = () => {
  const { bgImg, setBgImg } = useData();
  const location = useLocation();

  useEffect(() => {
    console.log("pathname:", location.pathname);
    switch (location.pathname) {
      case "/mountains":
        setBgImg("bg-mountains");
        break;
      default:
        setBgImg("bg-hero");
        break;
    }
  }, [location.pathname, setBgImg]);
  return (
    <div className="relative ">
      <div className={`${bgImg}   bg-cover bg-center `}>
        <div className=" ">
          <Navbar />
        </div>
        <div className="md:flex md:flex-col md:h-[80vh] md:items-center   ">
          <Booking />
          <Categories />
        </div>
      </div>
      <div className=" invisible md:visible md:absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
