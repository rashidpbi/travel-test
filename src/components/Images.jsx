import React from 'react'
import Image from './Image'
const Images = ({images,header}) => {
  return (
    <div className='w-full px-6 '>
    <div className="text-2xl font-medium   my-6 ">
    {header}
    </div>
    <div className='flex gap-3 overflow-x-scroll no-scrollbar md:justify-center md:gap-8 w-full'>

      {images.map((image)=>(<div key={image._id} className='relative  w-72 h-44 overflow-hidden rounded-lg flex-shrink-0'>
       <Image image={image}/>
      </div>))}
     
    </div>
    
  </div>
  )
}

export default Images
