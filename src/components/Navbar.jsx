import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useData } from "../context/DataContext";
const Navbar = () => {
  const { visibleNav, SetVisibleNav } = useData();
  const onNavClick = () => {
    SetVisibleNav(!visibleNav);
  };
  return (
    <>
      <div className={`md:hidden p-4`}>
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
          <div className="text-white mx-auto text-2xl  font-semibold">
            trxvl.
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between pt-6  mx-12  ">
        <div className="flex text-white  text-3xl font-semibold justify-center items-center  ">
          trxvl.
        </div>
        <div className={`flex gap-8 text-white `}>
          <div className="  after:block after:h-[2px] hover:after:bg-white after:my-2 cursor-pointer">
            Home
          </div>
          <div className="  after:block after:h-[2px] hover:after:bg-white after:my-2 cursor-pointer">
            Stays
          </div>
          <div className="  after:block after:h-[2px] hover:after:bg-white after:my-2 cursor-pointer">
            Flights
          </div>
          <div className="  after:block after:h-[2px] hover:after:bg-white after:my-2 cursor-pointer">
            Packages
          </div>
          <div className="  after:block after:h-[2px] hover:after:bg-white after:my-2 cursor-pointer">
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
