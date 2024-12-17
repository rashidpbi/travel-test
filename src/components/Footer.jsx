import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-black text-white md:px-12">
        <div className="font-bold text-3xl  w-[70vw] md:w-[20vw] text-center mx-auto m-7">Trxvl.</div>
        <div className="text-shade">
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col mx-auto w-[70vw] md:w-[20vw]  md:m-7 items-center gap-3">
              <div>Seslendirme ve Alt Jazz</div>
              <div>Media Market</div>
              <div>Gillie</div>
              <div>Size Last</div>
              <div className="border border-shade w-32 p-2  text-center">Helmet KOD</div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col  mx-auto  w-[70vw] md:w-[20vw] text-center  m-7  gap-3">
                  <div>Self Betimes</div>
                  <div>Yatirmici iliskileri </div>
                  <div>Basal Himmler</div>
                </div>
                <div className="flex flex-col mx-auto w-[70vw] md:w-[20vw] text-center m-7 gap-3">
                  <div>Yard Market</div>
                  <div>Is Imkanlari</div>
                  <div>Car Tercihleri</div>
                </div>
                <div className="flex flex-col mx-auto w-[70vw] md:w-[20vw]   text-center m-7 gap-3 ">
                  <div>Hedge Karla</div>
                  <div>Mullein Kosullari</div>
                  <div>Autumnal Bulgier</div>
                </div>
              </div>
              <div className="flex  mx-auto w-[70vw] md:w-[60vw]  m-7 justify-center  md:justify-end">
                
                  <div className="flex gap-7   md:w-[15vw]  justify-between   md:mr-16">
                    <FaFacebookSquare className="size-8 " />
                    <ImInstagram className="size-8 " />
                    <FaTwitter className="size-8 "/>
                    <FaYoutube className="size-8 "/>
                  </div>
              
              </div>{" "}
            </div>
          </div>
          <div className=" flex justify-center md:justify-start md:ml-20 my-7 text-center ">1997-2021 Netflix,Inc. {"{i-063d545a099242}"}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
