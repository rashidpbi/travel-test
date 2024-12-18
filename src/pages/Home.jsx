import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
import MobNav from '../components/MobNav'
import {Routes,Route} from 'react-router-dom'
import Mountains from '../components/Mountains'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className=''>
      
     <Hero/>
     <Routes>
      <Route path='/mountains' element={<Mountains/>}/>
      <Route path='/' element={<Content/> }/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default Home
