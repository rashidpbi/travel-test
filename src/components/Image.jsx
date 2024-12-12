import React from 'react'

const Image = ({image}) => {
  return (
    <div
    className="relative  w-72 h-44 overflow-hidden rounded-lg flex-shrink-0"
  >
    <img
      src={image.image}
      alt=""
      className="absolute  w-full h-full object-cover"
    />
    <div className="absolute  text-white left-4 bottom-4">
      {image.name}
    </div>
  </div>
  )
}

export default Image
