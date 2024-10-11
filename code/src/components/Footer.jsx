import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white p-8 ">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-[4rem] w-auto"
          />
        </div>

        {/* Links Section */}
        <ul className="flex space-x-4 mb-4">
          <li className="text-gray-700 hover:text-blue-500">
            <a href="/">Home</a>
          </li>

          <li className="text-gray-700 hover:text-blue-500">
            <a href="/features">Features</a>
          </li>
          <li className="text-gray-700 hover:text-blue-500">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-700 hover:text-blue-400"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-700 hover:text-pink-500"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} The Flip Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
