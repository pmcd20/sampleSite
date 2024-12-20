import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state to track scrolling
  const dropdownRef = useRef(null);


  // Close dropdown if click happens outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Detect scroll position to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change this value to determine when the background should change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={` bg-gray-900 md:${isScrolled ? 'bg-gray-900' : 'bg-transparent'} fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold text-white">
            PaulMc
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul
            className={`flex flex-col font-medium p-4 mt-4 border border-gray-700 rounded-lg
              md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}
          >

            <li>
              <Link to="/"

                className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:hover:text-blue-500 md:p-0"
              >
                Home
              </Link>
            </li>
            <li className="md:relative">
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
                }}
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                ref={dropdownRef}
                className={`${isDropdownOpen ? '' : 'hidden'
                  } md:absolute md:left-0 md:top-full md:mt-2 z-10 w-full md:w-44 bg-gray-700 divide-y divide-gray-600 rounded-lg shadow md:shadow-none md:rounded-none`}
                id="dropdownNavbar"
              >
                <ul className="py-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/#services"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/#pricing"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
