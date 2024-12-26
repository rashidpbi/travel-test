import React from 'react'
import Image from './Image'
import { useData } from '../context/DataContext'
const Images = ({images,header}) => {
  console.log("header:",header)
  return (
    <div className='w-full px-6  '>
    <div className={`text-2xl font-medium    ${header=="Top Vacation Destinations"?"text-black md:text-white":''} `}>
    {header}
    </div>
    <div className='flex  overflow-x-scroll no-scrollbar my-6  w-full  '>

      {images.map((image)=>(<div key={image._id} className='relative  w-96 h-44 overflow-hidden rounded-lg shrink-0'>
       <Image image={image}/>
      </div>))}
     
    </div>
    
  </div>
  )
}

export default Images
