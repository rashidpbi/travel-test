import React from 'react'
import Home from '../../pages/Home'
import Mountains from '../../components/Mountains'

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
