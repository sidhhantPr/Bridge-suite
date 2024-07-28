import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex justify-between items-center w-full p-4">
        <div className="flex items-center">
          <img
            className="h-8"
            src="https://www.bridgesuite.ai/assets/image/Bridge-logo.png"
            alt="Logo"
          />
          <ul className="hidden md:flex justify-between ml-4 space-x-4 text-sm">
            <li>Products</li>
            <li>Integrations</li>
            <li>Solutions</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-4 text-sm">
          <button>Login</button>
          <button className="bg-blue-500 p-2 text-white text-sm rounded-md">
            Contact Us
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4 text-sm bg-white shadow-md">
          <li>Products</li>
          <li>Integrations</li>
          <li>Solutions</li>
          <li>Resources</li>
          <div className="flex flex-col items-center space-y-4 w-full">
            <button className="w-auto">Login</button>
            <button className="w-auto bg-blue-500 p-2 text-white text-sm rounded-md">
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
