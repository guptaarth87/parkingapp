import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Section1 from '../Components/AboutUs/Section1'
import Description from '../Components/AboutUs/Description'
import WhatWeDo from '../Components/AboutUs/WhatWeDo'
import Footer from '../Components/Footer/Footer'
import Categories from '../Components/AboutUs/Categories'

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <br></br>
    <h2 className='text-3xl font-medium text-center title-font'>About Us</h2>
    <div className="container mx-auto   px-5  md:flex-row flex-col items-center">
    <WhatWeDo/>
    <Section1/>
    <Description/>
 
    </div>
  
    </>
  )
}
