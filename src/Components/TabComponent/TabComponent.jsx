import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carparkingauto from '../../assets/technology/Iot.jpg';
import Carfind from '../../assets/technology/carfind.jpg';
import Digitalpayment from '../../assets/technology/payment.jpg';
import Mobileinte from '../../assets/technology/mobileinte.jpg';
import Pgs from '../../assets/technology/pgs.jpg';
import Ticket from '../../assets/technology/ticket.jpg';

import Port from '../../assets/solutions/port.png';
import Bld from '../../assets/solutions/bld.png';
import Hospital from '../../assets/solutions/hospital.png';
import Officebuilding from '../../assets/solutions/office-building.png';
import Build from '../../assets/solutions/build.png';

export default function TabComponent() {
  return (
    <>
    <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
      <Tabs >
    <TabList>
      <Tab ><h2 className="text-2xl">Technology</h2></Tab>
      <Tab ><h2 className="text-2xl">Solutions</h2></Tab>
    </TabList>

    <TabPanel>
      <>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Intelli-Park Technology</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">AI-IoT parking solution uses sensors and cameras to track parking availability in real time. AI algorithms then provide drivers with up-to-date information on available spaces. Drivers can also reserve parking spots in advance, pay for parking directly through the CuroPark app, and be guided to their reserved spaces.</p>
    </div>
    <div class="flex flex-wrap -m-4">
   
      <div class="lg:w-1/3 sm:w-1/2 p-4">
       
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Carparkingauto} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-indigo-900 mb-3">AI / IOT BASED PARKING</h1>
            <p class="leading-relaxed">An AI/IoT-based system with Advanced Number Plate Recognition (ANPR) for intelligent parking.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Carfind} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 class="title-font text-lg font-medium text-indigo-900 mb-3">PARKING GUIDANCE SYSTEM</h1>
            <p class="leading-relaxed">Utilizing digital signage and LED indicators to enhance navigation and streamline parking operations.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Pgs} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">CAR FINDING TECHNOLOGY</h1>
            <p class="leading-relaxed">Empower users to locate their vehicles effortlessly through innovative Car Finding Technology</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Ticket} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">TICKETLESS PARKING MANAGEMENT</h1>
            <p class="leading-relaxed">Employing advanced RFID and ANPR for seamless entry and exit, eliminating the need for tickets.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Mobileinte} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">MOBILE APP INTEGRATION</h1>
            <p class="leading-relaxed">User-friendly mobile app to check real time parking update, find parked car and pay parking fare.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={Digitalpayment} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">DIGITAL PAYMENT OPTIONS</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Simplify transactions and elevate user experience with Digital Payment Options including Fastag.</h1>
            <p class="leading-relaxed"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    </TabPanel>
    <TabPanel>
      <>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR SOLUTIONS</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The solution can be customized to meet the specific needs of each type of facility, but some of the common benefits include Reduced traffic congestion, Increased revenue, Improved customer satisfaction & More efficient management.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-3/2 shadow-md m-3" >
        <div class="h-24 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={Port} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Multi-Tenant Commercial Buildings</h2>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-3/2 shadow-md m-3">
        <div class="h-24 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={Bld} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Shopping Centers and Retail</h2>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-3/2 shadow-md m-3">
        <div class="h-24 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={Build} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">High Rise Residential Buildings</h2>
          </div>
        </div>
      </div>

      <div class="p-4 lg:w-3/2 shadow-md m-3">
        <div class="h-24 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={Officebuilding} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Hospital and Medical Centers</h2>
          </div>
        </div>
      </div>

      <div class="p-4 lg:w-3/2 shadow-md m-3">
        <div class="h-24 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-16 h-16 object-cover object-center sm:mb-0 mb-4" src={Hospital} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Mixed Properties</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       </>
    </TabPanel>
  </Tabs>
  </div>
    </>
  )
}
