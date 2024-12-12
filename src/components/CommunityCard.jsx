import React from 'react'
import Taj from '../assets/community/Taj.png'
const CommunityCard = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-7  rounded-lg shadow-md mx-6 my-6'>
    <div className='w-80 h-60 rounded-xl overflow-hidden'>
      <img src={Taj} alt="" className='w-full h-full object-cover' />
    </div>
    <div className='flex flex-col gap-2 w-68 h- '>
    <p className=''>India</p>
    <p className='text-shade'>Travle commsadf</p>
    <p className='text-shade'>4r35334r32r4 rravells</p>
    </div>
</div>
  )
}

export default CommunityCard
