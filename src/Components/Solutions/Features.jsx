import React from 'react'
import Buildings from '../../assets/SolutionPage/buildings.jpg';
import Hospital from '../../assets/SolutionPage/hospital.jpg';
import Market from '../../assets/SolutionPage/market.jpg';

export default function Features() {
  return (
   <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={Buildings} />
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Commercial Buildings</h2>
          <p class="leading-relaxed"> Commercial business centres parking solution, designed and developed as per requirements of multi-tenant commercial business centres. It helps commercial building management to more efficiently manage parking allocation between companies and parking traffic in building. Solution will help in automation of day to day working of parking system.</p>
          <a href='/contact' class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={Hospital} />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Hospitals</h2>
              <p class="leading-relaxed">he system utilizes QR code for ticketless or touchless parking solution. QR is a code consisting of black and white squares readable by a machine. It is used for storing digital information that is scanned and read by a camera on a mobile phone. To provide secure parking solution, another key technology used by the system is Facial recognition. It makes use of Artificial intelligence (AI) to imitate human ability to recognize faces.</p>
              <a href='/contact' class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={Market} />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Market places</h2>
              <p class="leading-relaxed"> it facilitates to keep a record of vehicle occupants' faces. Our automated parking management system makes it simpler to locate safe parking places in real-time. The system enables the company admin to manage parking slots efficiently. This helps in easing traffic congestion.</p>
              <a href='/contact' class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}
