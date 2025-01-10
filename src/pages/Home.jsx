import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Routes, Route } from "react-router-dom";
import Mountains from "../components/Mountains";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { usePathname } from 'next/navigation'
const Home = () => {
  const { bgImg, setBgImg } = useData();
  const pathname = usePathname()

  // const location = useLocation();

  useEffect(() => {
    console.log("pathname:", pathname);
    console.log("bgImg:",bgImg)
    
    switch (pathname) {
      case "/mountains":
        setBgImg("bg-mountains");
        break;
      default:
        setBgImg("bg-hero");
        break;
    }
  }, [setBgImg]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className={`relative h-[92vh] ${bgImg}  bg-cover bg-center z-10`}>
        <Hero />
        {/* <div className=" invisible md:visible absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent "></div> */}
        <div className="relative md:-mt-32 z-20">
          {/* <Routes>
            <Route path="/mountains" element={<Mountains />} />
            <Route path="/" element={<Content />} />
          </Routes> */}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
