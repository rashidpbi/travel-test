import React from "react";
import iphone from "../assets/iPhone 13 Mockup.png";
import iphoneFull from "../assets/iPhone full.png";
import Gplay from "../assets/googleplay.png";
import AppleStore from "../assets/applestore.png";
const Contact = () => {
  return (
    <div className=" flex flex-col md:flex-row md:gap-24 bg-mountain bg-cover  bg-center px-20 pt-20 ">
      <div className=" flex items-end  ">
        <div className="hidden md:block mx-auto ">
          <img src={iphone} alt="" className="" />
        </div>
        <div className="w-60 mx-auto  mt-8  md:hidden">
          <img src={iphoneFull} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:w-[80vw]   ">
        <div className="text-white m-8 md:w-[60vw] ">
          <p className="text-3xl font-bold ">Your all-in-one travel app.</p>
          <p className="mt-4 max-w-[70vw]">
            Book flights, hotels, trains & rental cars anywhere in the world in
            just seconds. Get real-time flight updates, travel info, exclusive
            deals, and 30% more Trip Coins only on the app!
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:w-[60vw] md:h-[40vh] ">
          <div className=" flex flex-col  justify-between mx-8  md:h-[25vh]">
            <div className="flex gap-7 text-white">
              <div className="bg-slate-200 bg-opacity-40 w-[8vw] text-center rounded-2xl p-1">
                Mobile
              </div>
              <div>Email</div>
            </div>
            <p className="text-white mt-4 ">
              Enter your phone number to receive a text with a link to download
              the app.
            </p>
            {/* <div className="flex  bg-slate-200 bg-opacity-50 rounded-2xl  mt-4 relative z-10">
            <div>+91 Mobile Number</div>
            <div className="text-blue-600 bg-white   w-[20vw] rounded-3xl text-center py-2  absolute top-2 bottom-2 z-20">
              Search
            </div>
          </div> */}
            <div className="flex justify-between items-center bg-slate-200 bg-opacity-40 text-white rounded-2xl py-2 px-4 mt-4 z-10">
              <div>+91 Mobile Number</div>
              <div className="text-blue-600 bg-white   w-[15vw] rounded-3xl text-center py-2 z-20 ">
                Search
              </div>
            </div>
          </div>
          <div className="grid divide-x"></div>
          <div className="flex flex-col justify-between gap-7 m-8 md:m-0  md:h-[25vh]">
            <img src={Gplay} alt="" className="w-56 h-16" />
            <img src={AppleStore} alt="" className="w-56 h-16 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
