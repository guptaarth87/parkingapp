import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-gray-800 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-white text-2xl font-bold">Logo</a>

                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className={`h-8 w-8 fill-current ${isOpen ? 'hidden' : 'block'}`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                        </svg>
                        <svg
                            className={`h-8 w-8 fill-current ${isOpen ? 'block' : 'hidden'}`}
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.707 4.293l-15 15-1.414-1.414 15-15 1.414 1.414zM4.293 4.293l15 15 1.414-1.414-15-15-1.414 1.414z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
                <a href="/" className="text-white hover:text-gray-300 transition duration-300 block lg:inline-block mx-4">Home</a>
                    <a href="/about" className="text-white hover:text-gray-300 transition duration-300 block lg:inline-block mx-4">About Us</a>
                    <a href="/solutions" className="text-white hover:text-gray-300 transition duration-300 block lg:inline-block mx-4">Solutions</a>
                    <a href="/contact" className="text-white hover:text-gray-300 transition duration-300 block lg:inline-block mx-4">Contact Us</a>
                </div>

                {/* Login Button */}
                <div className={`lg:flex items-center mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ml-4 lg:ml-0 mt-4 lg:mt-0">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;