import React from 'react'
import { useData } from '../context/DataContext'
import CommunityCard from './CommunityCard'

const CommunityCards = ({header}) => {
    const {communities } = useData()
  return (
    <div className='my-6  '>
    <div className="text-2xl font-medium  px-6 ">
      {header}
    </div>
    <div className='flex gap-4 overflow-x-scroll no-scrollbar  '>
      {communities.map((community)=>(
        <div key={community._id}>
            <CommunityCard community={community}/>
            
        </div>
      ))}
    
    </div>
  </div>
  )
}

export default CommunityCards
