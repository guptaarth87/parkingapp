import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Tagline from '../Components/Tagline/Tagline'
import TabComponent from '../Components/TabComponent/TabComponent'
import ReachOut from '../Components/ReachOut/ReachOut'
import Footer2 from '../Components/Footer/Footer2'

export default function Landing() {
  return (
   <>
     <Navbar/>
     <Hero/>
     <Tagline/>
     <TabComponent/>
     <ReachOut/>
    
   </>
  )
}
