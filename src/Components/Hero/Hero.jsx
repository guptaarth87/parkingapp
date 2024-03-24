import React from 'react';
import HeroImg from '../../assets/hero.jpg';
import './Hero.css';

export default function Hero() {
  return (
    
    <>
<section class="text-gray-600 body-font px-10">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">THE LEADER’S CHOICE

        <br class="hidden lg:inline-block"></br>For Managing Parking
      </h1>
      <p class="mb-8 leading-relaxed">Smart Parking For Multi-Tenant Commercial Building, Retail Segments, Malls, Mixed Properties, High-Rise Residential Buildings, and Smart Cities.</p>
      <div class="flex justify-center">
        <a href="/book" class="inline-flex text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book slot</a>
        <a href="/about" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About us</a>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="animated object-cover object-center rounded" alt="hero" src={HeroImg} />
    </div>
  </div>
</section>
    </>
  )
}
