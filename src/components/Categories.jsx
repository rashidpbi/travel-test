import React from "react";
import Beach from "../assets/beach.svg";
import Desert from "../assets/desert.svg";
import Mountain from "../assets/mountain.svg";
import City from "../assets/city.svg";
import HouseBoat from "../assets/houseboat.svg";
import Country from '../assets/country.png'
import Camp from '../assets/camp.png'
import Castle from '../assets/castle.png'
import Skying from '../assets/skying.png'
import Tropical from '../assets/tropical.png'
import BeachW from '../assets/beachW.png'
import DesertW from '../assets/desertW.png'
import MountainW from '../assets/mountainW.png'
import CityW from '../assets/cityW.png'
import HouseBoatW from '../assets/houseBoatW.png'
import CountryW from '../assets/countryW.png'
import CampW from '../assets/campW.png'
import CastleW from '../assets/castleW.png'
import SkyingW from '../assets/skyingW.png'
import TropicalW from '../assets/tropicalW.png'
const Categories = () => {
  return (
    <div className=" w-screen  bg-white md:bg-transparent   px-6 max-w-[1100px] ">
      <div className="text-2xl font-medium md:text-light  my-6">
        Top Categories
      </div>
      <div className="flex  overflow-scroll no-scrollbar gap-4 md:gap-20 mx-2 ">
        <div className="flex md:hidden flex-col text-shade gap-4   items-center ">
          <img src={Beach} alt="beach" className="  " />
          Beaches
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4   items-center  ">
          <img src={BeachW} alt="beach" className="  " />
          Beaches
        </div>  
        <div className="flex md:hidden flex-col text-shade gap-4   items-center ">
          <img src={Desert} alt="Desert" className="  " />
          Deserts
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4   items-center  ">
          <img src={DesertW} alt="Desert" className="  " />
          Deserts
        </div>  
       
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={Mountain} alt="Mountain" className="   size-8 " />
          Mountains
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4    items-center">
          <img src={MountainW} alt="Mountain" className="   size-8 " />
          Mountains
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center ">
          <img src={City} alt="City" className="size-8    " />
          <p> cities</p>
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4    items-center ">
          <img src={CityW} alt="City" className="size-8    " />
          <p> cities</p>
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={HouseBoat} alt="HouseBoat" className="   size-8 " />
          Houseboats
        </div>
        <div className="hidden md:flex  flex-col text-shade gap-4    items-center">
          <img src={HouseBoatW} alt="HouseBoat" className="   size-8 " />
          Houseboats
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={Country} alt="Country" className="  size-8  " />
          Country
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4    items-center">
          <img src={CountryW} alt="Country" className="  size-8  " />
          Country
        </div>
        <div className="flex md:hidden  flex-col text-shade gap-4    items-center">
          <img src={Camp} alt="Camp" className="  size-8  " />
          Camp
        </div>
        <div className="hidden md:flex  flex-col text-shade gap-4    items-center">
          <img src={CampW} alt="Camp" className="  size-8  " />
          Camp
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={Castle} alt="Castle" className="  size-8  " />
          Castle
        </div>
        <div className="hidden md:flex  flex-col text-shade gap-4    items-center">
          <img src={CastleW} alt="Castle" className="  size-8  " />
          Castle
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={Skying} alt="Skying" className="  size-8  " />
          Skying
        </div>
        <div className="hidden md:flex flex-col text-shade gap-4    items-center">
          <img src={SkyingW} alt="Skying" className="  size-8  " />
          Skying
        </div>
        <div className="flex md:hidden flex-col text-shade gap-4    items-center">
          <img src={Tropical} alt="Tropical" className=" size-8   " />
          Tropical
        </div>
        <div className="hidden md:flex  flex-col text-shade gap-4    items-center">
          <img src={TropicalW} alt="Tropical" className=" size-8   " />
          Tropical
        </div>
       
       
      </div>
    </div>
  );
};

export default Categories;
