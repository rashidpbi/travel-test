import React from 'react'
import { useData } from '../context/DataContext'
import OfferCard from './OfferCard'

const OfferCards = ({header}) => {
    const {offers} = useData()
  return (
    <div className='my-6  '>
    <div className="text-2xl font-medium  px-6 ">
      {header}
    </div>
    <div className='flex gap-4 overflow-x-scroll no-scrollbar  '>
      {offers.map((offer)=>(
        <div key={offer._id}>
            <OfferCard offer={offer}/>
        </div>
      ))}
    
    </div>
  </div>
  )
}

export default OfferCards
