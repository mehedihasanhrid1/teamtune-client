import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const Profile = () => {
  const { user } = useAuth();
  const [data, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user.email}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
        <div className="flex items-center justify-center h-screen">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
    );
  }

  return (
    <div>
      <div className="py-4 lg:py-6 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="max-w-2xl md:mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto  lg:mx-auto xl:mx-auto">
          <div className="flex items-center justify-center mt-4 mb-2">
            <img
              className="object-cover w-32 h-32 border-4 border-white dark:border-gray-400 rounded-full"
              src={data.photo}
              alt={data.name}
            />
          </div>
          <div className="text-center mt-3">
            <h2 className="font-semibold text-xl md:text-2xl">{data.name}</h2>
            <p className="text-gray-800 dark:text-gray-300 mt-1">{data.designation}</p>
          </div>
          <ul className="py-4 mt-1 text-gray-700 dark:text-gray-300 flex items-center justify-center gap-8">
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <div>2k</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                className="w-4 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>15</div>
            </li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <div className="px-4 py-3">
              <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center">
                {data.role==='hr' && 'Human Resource Executive'}
                {data.role==='admin' && 'Admin'}
                {data.role==='user' && 'Employee'}
              </h3>
              <p className="mt-2 max-w-2xl  text-gray-700 dark:text-gray-300">
                This is some information about the user.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    {data.name}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    {data.email}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">Bank AC:</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    {data.bank_acc}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">Salary</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    $ {data.salary}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                    123 Main St
                    <br />
                    Anytown, USA 12345
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
