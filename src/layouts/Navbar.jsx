import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {BsFillMoonFill} from 'react-icons/bs';
import { IoSunnySharp } from "react-icons/io5";

const Navbar = ({isDarkMode, toggleDarkMode}) => {
  const [open, setOpen] = useState(false);

  const navlist = (
    <>
      <NavLink
        className={(navData) => (navData.isActive ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700" : 'hover:text-blue-600 dark:hover:text-blue-500')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700" : 'hover:text-blue-600 dark:hover:text-blue-500')}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700" : 'hover:text-blue-600 dark:hover:text-blue-500')}
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700" : 'hover:text-blue-600 dark:hover:text-blue-500')}
        to="/contactus"
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <section className="shadow-md">
      <div className="px-4 md:px-5">
        <nav className="flex items-center justify-between py-4">
          <Link
            to='/'
            className="text-3xl font-semibold leading-none"
          >
            Team<span className="text-blue-700">Tune</span>
          </Link>
          <div className="flex justify-between items-center flex-row-reverse lg:flex-row lg:space-x-6">
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 dark:border-gray-600 rounded dark:text-blue-400 navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex text-lg font-medium text-gray-700  dark:text-gray-100">
              {navlist}
            </ul>
            <button onClick={toggleDarkMode} className='p-2 mr-2 lg:mr-0 md:p-3 text-lg md:text-xl dark:hover:bg-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold'>
            {isDarkMode ? <IoSunnySharp /> :<BsFillMoonFill/> }
            </button>
            <div className="hidden lg:block">
              <Link
                to="/login"
                className="inline-block px-6 py-3 mr-2 text-lg font-medium leading-none text-gray-100 bg-blue-600 rounded-full dark:hover:bg-blue-500 hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-10 h-screen p-3 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <Link
              className="p-2 text-2xl font-bold"
              to="/"
            >
              Team<span className="text-blue-700">Tune</span>
            </Link>
            <button
              className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-blue-300 lg:hidden"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-4 text-left mt-4 font-medium md:text-lg flex flex-col items-start gap-3">
            {navlist}
          </ul>
          <div className="block mt-5 lg:hidden px-5">
            <Link
              to="/login"
              className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 bg-blue-600 rounded-full dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
