import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import useHr from "../hooks/useHr";
import useAdmin from "../hooks/useAdmin";
import useEmployee from "../hooks/useEmployee";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, logOut } = useAuth();
  const [isHr] = useHr();
  const [isAdmin] = useAdmin();
  const [isEmployee] = useEmployee();

  const navlist = (
    <>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700"
            : "hover:text-blue-600 dark:hover:text-blue-500"
        }
        to="/"
      >
        Home
      </NavLink>
      {user && isHr && (
        <NavLink
          className={(navData) =>
            navData.isActive || location.pathname.includes("/dashboard/hr")
              ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700"
              : "hover:text-blue-600 dark:hover:text-blue-500"
          }
          to="/dashboard/hr/employee-list"
        >
          Dashboard
        </NavLink>
      )}
      {user && isAdmin && (
        <NavLink
          className={(navData) =>
            navData.isActive || location.pathname.includes("/dashboard/admin")
              ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700"
              : "hover:text-blue-600 dark:hover:text-blue-500"
          }
          to="/dashboard/admin/all-employee-list"
        >
          Dashboard
        </NavLink>
      )}
      {user && isEmployee && (
        <NavLink
          className={(navData) =>
            navData.isActive || location.pathname.includes("/dashboard/employee")
              ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700"
              : "hover:text-blue-600 dark:hover:text-blue-500"
          }
          to="/dashboard/employee/profile"
        >
          Dashboard
        </NavLink>
      )}
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "text-blue-700 dark:text-blue-600 dark:border-blue-600 border-b-2 border-blue-700"
            : "hover:text-blue-600 dark:hover:text-blue-500"
        }
        to="/contactus"
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <section className="shadow-md dark:bg-gray-900">
      <div className="px-4 md:px-5">
        <nav className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-[26px] md:text-3xl font-semibold leading-none"
          >
            Team<span className="text-blue-700">Tune</span>
          </Link>
          <div className="flex justify-between items-center flex-row-reverse lg:flex-row lg:space-x-3">
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
            <ul className="hidden lg:w-auto lg:space-x-6 lg:items-center lg:flex text-lg font-medium text-gray-700  dark:text-gray-100">
              {navlist}
            </ul>
            <div
              className={`${
                user
                  ? "flex gap-2 mr-3 md:mr-2 flex-row-reverse md:flex-row items-center justify-center"
                  : "block"
              }`}
            >
              <div className="flex items-center justify-center gap-4 lg:ml-4 lg:mr-1">
                {user ? (
                  <div className="hidden md:inline-block lg:hidden xl:inline-block">
                    <p className="text-lg font-medium text-gray-800  dark:text-gray-100">
                      {user.displayName}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {user && (
                  <Popover>
                    <PopoverHandler>
                      <img
                        className="cursor-pointer object-cover rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                        src={user.photoURL}
                        alt=""
                      />
                    </PopoverHandler>
                    <PopoverContent>
                      <div className="lg:p-1">
                        <button
                          onClick={() => {
                            logOut();
                          }}
                          className="inline-block lg:text-lg px-5 py-3 font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
                        >
                          Log Out
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 md:p-3 text-xl dark:hover:bg-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold ${
                  user ? "mr-0" : "mr-2 lg:mr-0"
                }`}
              >
                {isDarkMode ? <IoSunnySharp /> : <BsFillMoonFill />}
              </button>
            </div>
            <div className="hidden lg:block">
              {user ? (
                <button
                  onClick={() => {
                    logOut();
                  }}
                  className="inline-block px-5 py-3 mr-2 font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="inline-block px-5 py-3 mr-4  font-semibold leading-none text-blue-600 border border-blue-500 rounded hover:text-blue-700 hover:border-blue-400">
                      Log In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="inline-block px-5 py-3 mr-2 font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700">
                      Register
                    </button>
                  </Link>
                </>
              )}
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
          className={`absolute inset-0 z-50 h-screen p-3 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <Link className="p-2 text-2xl font-bold" to="/">
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
          <ul
            className="px-4 text-left mt-4 font-medium md:text-lg flex flex-col items-start gap-3"
            onClick={() => setOpen(false)}
          >
            {navlist}
          </ul>
          {user ? (
            <>
              <div className="block mt-5 lg:hidden px-5">
                <button
                  onClick={() => {
                    logOut();
                    setOpen(false);
                  }}
                  className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="block mt-5 lg:hidden px-5">
                <Link to="/login">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 bg-blue-600 rounded-full hover:bg-blue-700"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <div className="block mt-3 lg:hidden px-5">
                <Link to="/register">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center border border-blue-700 rounded-full hover:text-white hover:bg-blue-700"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
