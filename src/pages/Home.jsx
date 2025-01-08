import React from "react";
import bg from '../../public/bg-hero.png'
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Routes, Route } from "react-router-dom";
import Mountains from "../components/Mountains";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import Image from 'next/image'
const Home = () => {
  const pathname = usePathname();
  const { bgImg, setBgImg } = useData();
  console.log("path:", pathname);
  console.log("bg,", bgImg);
  // useEffect(() => {
  //   console.log("pathname:", path name);

  //   switch (pathname) {
  //     case "/mountains":
  //       setBgImg("bg-mountains");
  //       break;
  //     default:
  //       setBgImg("bg-hero");
  //       break;
  //   }
  // }, [pathname, setBgImg]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className={`relative h-[92vh] bg-[url('/bg-hero.png')]   bg-cover bg-center z-10`}>
        <Hero />
        <div className=" invisible md:visible absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent "></div>
        <div>
        </div>
      
        <Footer />
      </div>
    </div>
  );
};

// const Home = () => {
//   const { bgImg, setBgImg } = useData();
//   const pathname = usePathname()
//     useEffect(() => {
//     console.log("pathname:", pathname);
//     switch (pathname) {
//       case "/mountains":
//         setBgImg("bg-mountains");
//         break;
//       default:
//         setBgImg("bg-hero");
//         break;
//     }
//   }, [pathname, setBgImg]);
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className={`relative h-[92vh] ${bgImg}   bg-cover bg-center z-10`}>
//         <Hero />
//         <div className=" invisible md:visible absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent "></div>
//         <div className="relative md:-mt-32 z-20">

//         </div>
//         <Footer/>
//       </div>
//     </div>
//   );
// };

export default Home;
