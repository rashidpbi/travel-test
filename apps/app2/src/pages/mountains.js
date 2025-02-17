import React from 'react'

import Mountains from '../components/Mountains.tsx'
import Home from '../components/Home.tsx'
import axios from 'axios'
export const getStaticProps = async()=>{
  try {
    const response = await  axios.get('http://localhost:3200/api/mountains')
    const result  = response.data
    return {props:{result:result}}
  } catch (error) {
    
  }
}
const page = ({result}) => {
  return (
    <div>
       <Home bgImg={"bg-mountains"} >
        <Mountains data={result}/>
       </Home>
    </div>
  )
}

export default page