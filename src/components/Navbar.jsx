import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [visibleNav, SetVisibleNav] = useState(false);
  const onNavClick = () => {
    SetVisibleNav(!visibleNav);
  };
  return (
    <>
      <div className={`md:hidden`}>
        <div className="flex justify-between ">
          <div>
            <div onClick={onNavClick}>
              <CgMenuLeft
                className={`text-white text-2xl font-bold ${
                  visibleNav ? "hidden" : ""
                }`}
              />
            </div>
            <div onClick={onNavClick}>
              <MdClose
                className={`text-white text-2xl font-bold ${
                  visibleNav ? "" : "hidden"
                } `}
              />
            </div>
          </div>
          <div className="text-white mx-auto text-2xl  font-semibold">trxvl.</div>
        </div> 
        <div
          className={` ${
            visibleNav ? "flex flex-col" : "hidden"
          }   text-white   items-center `}
        >
          <div className="border rounded-md m-2 w-48 ">Home</div>
          <div className="border rounded-md m-2 w-48">Stays</div>
          <div className="border rounded-md m-2 w-48">Flights</div>
          <div className="border rounded-md m-2 w-48">Packages</div>
          <div className="border rounded-md m-2 w-48">Sign Up</div>
        </div>
      </div>
      <div className="hidden md:flex justify-between">
        <div className="flex text-white  text-3xl font-semibold justify-center items-center ">trxvl.</div>
        <div className={`flex text-white `}>
              <div className='p-2 m-7 after:block after:h-[2px] after:bg-white'>Home</div>
              <div className='p-2 m-7'>Stays</div>
              <div className='p-2 m-7'>Flights</div>
              <div className='p-2 m-7'>Packages</div>
              <div className='p-2 m-7'>Sign Up</div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
