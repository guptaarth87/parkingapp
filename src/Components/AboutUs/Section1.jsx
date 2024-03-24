import React from 'react'
import HeroImg from '../../assets/hero.jpg';

export default function Section1() {
  return (
   <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">At Intellipark
        <br class="hidden lg:inline-block"></br>We ensure
      </h1>
      <p class="mb-8 leading-relaxed">Products and solutions designed and developed by us finds practical applications in commercial business centers, Residential societies, Governments, Hospitality, Educational Institutions, Special Economic Zones (SEZ) etc.</p>
      <div class="flex justify-center">
      <a href="/book" class="inline-flex text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book slot</a>
        <a href="/contact" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact us</a>
      
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={HeroImg} />
    </div>
  
  </div>
</section>
 

   </>
  )
}
