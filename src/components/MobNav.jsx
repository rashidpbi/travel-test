import React from 'react'
import { MdHome } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
const MobNav = () => {
  return (
    <div className='flex md:hidden gap-9 justify-center my-5 '>
       <div className='flex flex-col items-center gap-2 px-5'><MdHome className='size-8'/> Home</div>
       <div className='flex flex-col items-center gap-2 px-5' > <FaSuitcaseRolling className='size-8' />Packages</div>
       <div className='flex flex-col items-center gap-2 px-5'><FaWarehouse className='size-8' /> Stays</div>
       <div className='flex flex-col items-center gap-2 px-5'><MdFlight  className='size-8'/> Flights</div>
    </div>
  )
}

export default MobNav
