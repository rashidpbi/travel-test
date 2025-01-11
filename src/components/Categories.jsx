'use client'
import React from "react";
import Beach from "../assets/beach.svg";
import Desert from "../assets/desert.svg";
import Mountain from "../assets/mountain.svg";
import City from "../assets/city.svg";
import HouseBoat from "../assets/houseboat.svg";
import Camp from "../assets/camp.png";
import Castle from "../assets/castle.png";
import Skying from "../assets/skying.png";
import Tropical from "../assets/tropical.png";
import BeachW from "../assets/beachW.png";
import DesertW from "../assets/desertW.png";
import MountainW from "../assets/mountainW.png";
import CityW from "../assets/cityW.png";
import HouseBoatW from "../assets/houseBoatW.png";
import CampW from "../assets/campW.png";
import CastleW from "../assets/castleW.png";
import SkyingW from "../assets/skyingW.png";
import TropicalW from "../assets/tropicalW.png";
import { NavLink } from "react-router-dom";
import Link from 'next/link'
import { useRouter } from "next/navigation";


const Categories = ({ title }) => {
  // const router = useRouter();
  // const onCategorySelect = ()=>{
  //   console.log("categoru pushed")
  //   router.push('/mountains')
  // }
 
  return (
    <div>
      Categories
           <Link  href='/mountains'>
           <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
             {/* <img src={Beach} alt="beach" className="" /> */}
             <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
               Beaches
             </div>
           </div>
           <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
             {/* <img src={BeachW} alt="beach" className="" /> */}
             <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
               Beaches
             </div>
           </div>
         </Link>      
    </div>
    // <div className="w-full bg-white md:bg-transparent px-6 max-w-[1100px]">
    //   <div className="text-2xl font-medium md:text-light my-6 ">
    //     Top Categories
    //   </div>
    //   <div className="flex overflow-scroll no-scrollbar gap-4 md:gap-20 mx-2  ">
    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Beach} alt="beach" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Beaches
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={BeachW} alt="beach" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Beaches
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Desert} alt="desert" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Deserts
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={DesertW} alt="desert" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Deserts
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/mountains"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Mountain} alt="mountain" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Mountains
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={MountainW} alt="mountain" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Mountains
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={City} alt="city" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Cities
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={CityW} alt="city" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Cities
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={HouseBoat} alt="houseboat" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Houseboats
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={HouseBoatW} alt="houseboat" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Houseboats
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Camp} alt="camp" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Camp
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={CampW} alt="camp" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Camp
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Castle} alt="castle" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Castle
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={CastleW} alt="castle" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Castle
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Skying} alt="skiing" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Skiing
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={SkyingW} alt="skiing" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Skiing
    //         </div>
    //       </div>
    //     </NavLink>

    //     <NavLink to={"/"}>
    //       <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
    //         <img src={Tropical} alt="tropical" className="" />
    //         <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
    //           Tropical
    //         </div>
    //       </div>
    //       <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
    //         <img src={TropicalW} alt="tropical" className="" />
    //         <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
    //           Tropical
    //         </div>
    //       </div>
    //     </NavLink>
    //   </div>
    // </div>
  );
};

export default Categories;
