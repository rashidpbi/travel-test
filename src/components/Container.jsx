import React from 'react'

const Container = ({header,datas,Component}) => {
   console.log("datas:",datas)
  return (
    <div className='my-6  '>
    <div className="text-2xl font-medium  px-6 ">
      {header}
    </div>
    <div className='flex gap-2 overflow-x-scroll no-scrollbar  '>
      {datas.map((data)=>(
        <div key={data._id}>
            <Component data={data}/>
            
        </div>
      ))}
    
    </div>
  </div>
  )
}

export default Container
