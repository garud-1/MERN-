import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    // Main header container
    <header className="shadow sticky z-50 top-0">
      {/* Navigation bar */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        {/* Flex container for logo and navigation items */}
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo container */}
          <Link to="/" className="flex items-center">
            {/* Logo image */}
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12" // Margin right 3, height 12
              alt="Logo"
            />
          </Link>
          {/* Container for login and get started buttons */}
          <div className="flex items-center lg:order-2">
            {/* Login link */}
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            // Text color, hover background color, focus ring color and size, font size and weight, padding, margin right
            >
              Log in
            </Link>
            {/* Get started link */}
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            // Text color, background color, hover background color, focus ring color and size, font size and weight, padding, margin right
            >
              Get started
            </Link>
          </div>
          {/* Mobile menu container, hidden by default and shown in lg screens */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* Navigation list */}
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* Single navigation item */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    // Block display, padding, transition duration, dynamic text color based on active state, border bottom, hover background and text color, lg hover background and border
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}