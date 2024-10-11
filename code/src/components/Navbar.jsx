import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.jpg';
import seclogo from '../assets/seclogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 md:p-8 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* First Logo Section */}
        <div className="flex items-start">
          <img src={logo} alt="Logo" className="h-[3rem] w-auto md:h-[4rem]" />
        </div>
        
        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex md:space-x-8 mt-4 md:mt-0 font-semibold text-lg ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="text-gray-800 block py-2 md:py-0 hover:text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="text-gray-800 block py-2 md:py-0 hover:text-blue-500 hover:underline">
              Key Features
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 block py-2 md:py-0 hover:text-blue-500 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Second Logo Section */}
        <div className="flex items-start mt-4 md:mt-0">
          <img src={seclogo} alt="Secondary Logo" className="h-[3rem] w-auto md:h-[4rem]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
