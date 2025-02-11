import React from 'react'

import Mountains from '../components/Mountains.tsx'
import Home from '../components/Home.tsx'

const page = () => {
  return (
    <div>
       <Home bgImg={"bg-mountains"} >
        <Mountains/>
       </Home>
    </div>
  )
}

export default page