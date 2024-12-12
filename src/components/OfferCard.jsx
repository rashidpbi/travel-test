import React from 'react'

const OfferCard = ({offer}) => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-7  rounded-lg shadow-md mx-6 my-6'>
    <div className='w-80 h-60 rounded-xl overflow-hidden'>
      <img src={offer.image} alt="" className='w-full h-full object-cover' />
    </div>
    <div className='flex flex-col  w-80 h-60 justify-between'>
    <p className='text-shade'>{offer.name}</p>
    <p className='font-bold text-3xl'>{offer.p1}</p>
    <p className='text-shade'>{offer.p2}</p>
    <div className='flex items-center justify-center bg-blue-800 text-white w-40 h-12 rounded-full text-center' >Book Now</div>
    </div>
</div>
  )
}

export default OfferCard
