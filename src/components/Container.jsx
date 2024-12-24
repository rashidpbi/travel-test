import React from "react";
import { useData } from "../context/DataContext";

const Container = ({ header, datas, Component }) => {
  const {bgImg} = useData()
  return (
    <div >
      <div className={`text-2xl font-medium  px-6  ${header=="Popular Beach Destinations"?"text-black md:text-white mt-4":''}`}>{header}</div>
      <div className="flex  overflow-x-scroll no-scrollbar  ">
        {datas.map((data) => (
          <div key={data._id}>
            <Component data={data} />
          </div>
        ))}
        {header=="Recently Viewed"?<div className="p-6 relative bg-blueMount rounded-lg  shadow-md mx-6 my-6  ">
          <div className="flex flex-col w-80 h-60 rounded-xl text-white gap-6">
          <div className="font-semibold text-2xl">Summer Bonanza!</div>
          <div>Enjoy comfortable transfers in shared coaches</div>
          <div>Choose from 5 flights per week</div>
          <div>Get a free Rapid Antigen Test at selected hotels</div>
          </div>
        </div>:''}
        
      </div>
    </div>
  );
};

export default Container;
