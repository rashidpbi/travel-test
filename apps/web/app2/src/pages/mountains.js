import React from 'react'

import Mountains from '../components/Mountains'
import Home from '../components/Home'

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