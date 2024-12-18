import React from 'react'
import Destinations from './Destinations'
import Properties from './Properties'
import Plan from './Plan'
import CommunityCard from './CommunityCard'
import Contact from './Contact'
import Container from './Container'
import { useData } from '../context/DataContext'
import OfferCard from './OfferCard'
import { communities } from '../assets/assets'
const Content = () => {
  const {offers,Communities} = useData()
  console.log("offers:",offers)
  return (
    <div>
   <Destinations/>
   <Container header={"Offers"} datas={offers} Component={OfferCard} />
   <Properties/>
   <Plan/>
   <Container header={"Connect with other travelers in our community" } datas={communities} Component={CommunityCard}/>
   <Contact/>
  
    </div>
  )
}

export default Content
