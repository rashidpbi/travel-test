import React from 'react'
const CommunityCard = ({community}) => {
  return (
    
      <div className='flex flex-col  p-4 gap-7  rounded-lg shadow-md mx-6 my-6 h-96 w-88'>
      <div className='w-80 h-60 rounded-xl overflow-hidden'>
        <img src={community.image} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-2  '>
      <p className='text-2xl'>{community.name}</p>
      <p className='text-shade'>{community.p1}</p>
      <p className='text-shade'>{community.p2}</p>
      </div>
      </div>
 
  )
}

export default CommunityCard
