import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { GrDocument } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import useHr from "../hooks/useHr";
import useAdmin from "../hooks/useAdmin";
import useEmployee from "../hooks/useEmployee";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [isHr] = useHr();
  const [isAdmin] = useAdmin();
  const [isEmployee] = useEmployee();

  return (
    <div className="relative h-[40rem]">
      <div onClick={() => setOpen(!open)}>
        <button
          className={`absolute z-40 top-1/2 py-3  bg-gray-300 dark:bg-[#182032]  dark:text-white text-gray-700 ${
            open
              ? "rounded-l-full pr-1 pl-2 left-[252px]"
              : "rounded-r-full left-0 pl-1 pr-2"
          }`}
        >
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <div
        className={`absolute xl:relative dark:bg-[#111827] border-r border-gray-200 dark:border-gray-900 h-[40rem] w-[280px] bg-gray-100 overflow-hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="pt-4">
          {isHr && <ul className="mb-6  md:text-lg  font-medium dark:text-gray-300">
            <Link to="/dashboard/hr/profile">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/hr/profile"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <CgProfile />
                </span>
                <span>Profile</span>
              </li>
            </Link>
            <Link to="/dashboard/hr/employee-list">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/hr/employee-list"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <FaUsers />
                </span>
                <span>Employee List</span>
              </li>
            </Link>
            <Link to="/dashboard/hr/progress">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/hr/progress"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <GiProgression />
                </span>
                <span>Progress</span>
              </li>
            </Link>
          </ul>}
          {isAdmin && <ul className="mb-6  md:text-lg  font-medium dark:text-gray-300">
            <Link to="/dashboard/admin/profile">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/admin/profile"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <CgProfile />
                </span>
                <span>Profile</span>
              </li>
            </Link>
            <Link to="/dashboard/admin/all-employee-list">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/admin/all-employee-list"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <FaUsers />
                </span>
                <span>All Employee List</span>
              </li>
            </Link>
          </ul>}
          {
            isEmployee && <ul className="mb-6  md:text-lg  font-medium dark:text-gray-300">
            <Link to="/dashboard/employee/profile">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/employee/profile"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                  <CgProfile />
                </span>
                <span>Profile</span>
              </li>
            </Link>
            <Link to="/dashboard/employee/payment-history">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/employee/payment-history"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                <GiMoneyStack />
                </span>
                <span>Payment History</span>
              </li>
            </Link>
            <Link to="/dashboard/employee/work-sheet">
              <li
                className={`pl-8 flex items-center py-3 ${
                  location.pathname === "/dashboard/employee/work-sheet"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                }`}
              >
                <span className="text-3xl mr-3">
                <BiSolidSpreadsheet />
                </span>
                <span>Work Sheet</span>
              </li>
            </Link>
          </ul>
          }
          <hr className="bg-gray-400 dark:bg-gray-600 border-none h-[1px] mx-4" />
          <ul className="mt-6 cursor-pointer md:text-lg  font-medium dark:text-gray-300">
            <li className="pl-8 flex justify-start items-center py-3 hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white">
              <span className="text-3xl mr-3">
                <GrDocument />
              </span>
              <span>Docs</span>
            </li>
            <li className="pl-8 flex justify-start items-center py-3 hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white">
              <span className="text-3xl mr-3">
                <MdOutlineEmail />
              </span>
              <span>Email</span>
            </li>
            <li className="pl-8 flex justify-start items-center py-3 hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white">
              <span className="text-3xl mr-2">
                <FiUser />
              </span>
              <span>Team</span>
            </li>
            <li className="pl-8 flex justify-start items-center py-3 hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white">
              <span className="text-3xl mr-3">
                <IoMdInformationCircleOutline />
              </span>
              <span>Help</span>
            </li>
            <li className="pl-8 flex justify-start items-center py-3 hover:bg-gray-400 dark:hover:bg-blue-500 dark:hover:text-white">
              <span className="text-3xl mr-3">
                <IoCalendarOutline />
              </span>
              <span>Calender</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
