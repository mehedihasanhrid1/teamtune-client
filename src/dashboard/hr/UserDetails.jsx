import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarChart from "../../components/BarChart";

const UserDetails = () => {
  const { userEmail } = useParams();
  const [user, setUser] = useState({});
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/user/${userEmail}`);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [userEmail]);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await axios.get(
          `https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/payments/${userEmail}`
        );
        const sorted = res.data.sort((a, b) => {
          const dateA = moment(a.payment_for, "MMMM YYYY");
          const dateB = moment(b.payment_for, "MMMM YYYY");
          return dateA - dateB;
        });
        setPayment(sorted);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchPayment();
  }, [userEmail]);

  return (
    <div>
      <div className="flex items-center justify-center w-[20rem] md:w-[44rem] lg:w-[60rem]">
        <div className="py-4 w-[19rem] md:w-[42rem] lg:w-[58rem] lg:py-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-full mx-auto">
            <div className="flex items-center justify-center mt-4 md:mt-8 mb-2">
              <img
                className="object-cover w-32 h-32 md:w-56 md:h-56 border-4 border-white dark:border-gray-400 rounded-full"
                src={user.photo}
                alt={user.name}
              />
            </div>
            <div className="text-center mt-3 md:mt-5">
              <h2 className="font-semibold text-xl md:text-4xl">{user.name}</h2>
              <p className="text-gray-800 text-lg md:text-xl font-medium dark:text-gray-300 mt-1 md:mt-2 mb-4">
                {user.designation}
              </p>
            </div>
            <div className="px-4 pt-2 flex items-center justify-center flex-col border-t mx-8 lg:mx-10">
              <div className="py-3">
                <h3 className="text-xl md:text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center">
                  Employee
                </h3>
                <p className="mt-2 max-w-2xl text-center text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Profile Information
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 sm:px-6">
                    <dt className="text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                      {user.name}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 sm:px-6">
                    <dt className="text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                      {user.email}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 sm:px-6">
                    <dt className="text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                      Bank AC:
                    </dt>
                    <dd className="mt-1 text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                      {user.bank_acc}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 sm:px-6">
                    <dt className="text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                      Salary
                    </dt>
                    <dd className="mt-1 text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                      $ {user.salary}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="px-4 pt-2 flex items-center justify-center flex-col border-t mx-8 lg:mx-10">
              <div className="py-3">
                <h3 className="text-xl md:text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center">
                  Salary vs. Month Chart
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-6">
                <div className="w-[18rem] md:w-[36rem] lg:w-[52rem]">
                  <BarChart data={payment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
