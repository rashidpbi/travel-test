import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Routes, Route } from "react-router-dom";
import Mountains from "../components/Mountains";
import Footer from "../components/Footer";
import { useData } from "../context/DataContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
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
    <div className="relative">
      <div className={`relative h-[94vh] ${bgImg}   bg-cover bg-center z-10`}>
        <Hero />
        <div className="relative md:-mt-32 z-20">
          <Routes>
            <Route path="/mountains" element={<Mountains />} />
            <Route path="/" element={<Content />} />
          </Routes>
          <Footer />
        </div>
      <div className=" invisible md:visible md:absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent "></div>
      </div>
    </div>
  );
};

export default Home;
