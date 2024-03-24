import React from 'react'

export default function WhatWeDo() {
  return (
    <>
 

    <div class="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- Mission Card --> */}
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h1 class="text-3xl font-bold mb-4 text-blue-600">Mission</h1>
            <p class="text-gray-700 mb-8">Our mission is to provide innovative solutions that improve lives globally.</p>
        </div>

        {/* <!-- Vision Card --> */}
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h1 class="text-3xl font-bold mb-4 text-blue-600">Vision</h1>
            <p class="text-gray-700 mb-8">To be the leading company in our industry, recognized for our commitment to excellence and customer satisfaction.</p>
        </div>
{/* 
        <!-- Goals Card --> */}
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h1 class="text-3xl font-bold mb-4 text-blue-600">Goals</h1>
            <ul class="list-disc pl-6 mb-4 text-gray-700">
                <li>Deliver high-quality products and services.</li>
                <li>Build strong relationships with our clients.</li>
                <li>Empower our employees through continuous learning and development.</li>
                <li>Contribute positively to our communities and environment.</li>
            </ul>
        </div>

        
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h1 class="text-3xl font-bold mb-4 text-blue-600">How We Work</h1>
            <p class="text-gray-700 mb-8">We follow a collaborative and agile approach to problem-solving, leveraging the latest technologies and best practices to deliver exceptional results for our clients.</p>
        </div>
    </div>

    <footer class="text-center text-gray-500 text-sm mt-8">
        &copy; Intellipark. All rights reserved.
    </footer>



    </>
  )
}
