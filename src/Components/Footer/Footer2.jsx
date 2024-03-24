import React from 'react'

export default function Footer2() {
  return (
   <>
    <footer class="bg-gray-900 text-white py-12 p-6">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div class="mb-8 lg:mb-0">
                <p class="text-2xl font-bold mb-2">Smarter solutions for a digital planet.</p>
                <p class="text-gray-400 mb-4">1234 Street Name, City, Country</p>
                <p class="text-gray-400 mb-4">Phone: +1 234 567 890</p>
                <p class="text-gray-400 mb-4">Email: info@companyxyz.com</p>
            </div>
            <div class="flex space-x-4">
                
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                   Go to top
                </a>
            </div>
        </div>
        <p class="text-center text-gray-400 text-sm mt-8">© Intellipark. All rights reserved.</p>
    </footer>
   </>
  )
}
