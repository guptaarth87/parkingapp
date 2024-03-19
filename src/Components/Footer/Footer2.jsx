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
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm2 20c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8h4v2H4v10h16V10h-4V8h4v12z"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.29 0H6.71C3.55 0 1 2.55 1 5.71v12.58C1 21.45 3.55 24 6.71 24h10.58c3.16 0 5.71-2.55 5.71-5.71V5.71C23 2.55 20.45 0 17.29 0zM16 13.24c0 .28-.01.55-.04.82.05.28.04.57-.04.86-.1.39-.34.73-.73.94-.66.44-1.41.58-2.21.42a3.78 3.78 0 0 1-2.65-1.75c-.27-.44-.44-.94-.49-1.46a2.7 2.7 0 0 1 .51-1.75 2.86 2.86 0 0 1 2.19-1.06c.89-.09 1.73.21 2.42.83.12.12.23.26.32.41.14.26.24.55.29.85a4.84 4.84 0 0 1-.04 1.95zM17 6c0-.58-.4-1.07-1-1.25a7.41 7.41 0 0 0-4.83.34c-.3.12-.57.29-.79.51s-.39.49-.51.79a7.41 7.41 0 0 0-.34 4.83c.18.6.67 1 1.25 1.25a7.41 7.41 0 0 0 4.83-.34c.3-.12.57-.29.79-.51.22-.22.39-.49.51-.79a7.41 7.41 0 0 0 .34-4.83z"></path>
                    </svg>
                </a>
            </div>
        </div>
        <p class="text-center text-gray-400 text-sm mt-8">© 2024 Company XYZ. All rights reserved.</p>
    </footer>
   </>
  )
}
