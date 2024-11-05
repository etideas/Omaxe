import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import seclogo from "../assets/seclogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 pt-6 md:p-8 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* First Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[2rem] w-auto md:h-[4rem]"
          />
        </div>

        {/* Navigation Links - Centered between logos on larger screens, hidden on mobile */}
        <ul
          className={`hidden md:flex md:space-x-8 font-semibold text-xl text-center`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-800 block py-2 hover:text-blue-500 transition-colors duration-150 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-gray-800 block py-2 hover:text-blue-500 transition-colors duration-150 "
            >
              Key Features
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 block py-2 hover:text-blue-500 transition-colors duration-150 "
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Second Logo Section */}
        <div className="flex items-center">
          <img
            src={seclogo}
            alt="Secondary Logo"
            className="h-[2rem] md:h-[4rem]"
          />
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <ul
        className={`md:hidden flex-col mt-4 font-semibold text-lg text-center transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li>
          <Link
            to="/"
            className="text-gray-800 block py-2 hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className="text-gray-800 block py-2 hover:text-blue-500"
          >
            Key Features
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-800 block py-2 hover:text-blue-500"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
