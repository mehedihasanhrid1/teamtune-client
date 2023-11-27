import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmployeeList from '../../hooks/useEmployeeList';
import Swal from "sweetalert2";

const EmployeeList = () => {
  const [users,loading,refetch] = useEmployeeList();

  useEffect(() => {
    document.title = 'Employee List - Dashboard';
  }, []);

  const handleToggle = async (userId, currentStatus) => {
    try {
      const response = await axios.patch(`http://localhost:5000/users/${userId}`, { verify: !currentStatus });
      if(response.data){
        Swal.fire({
          icon: 'success',
          title: 'Verification Status Updated',
          text: 'The verification status has been updated successfully.',
        });
      }
      refetch();
    } catch (error) {
      console.error('Error updating verification status', error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto w-80 md:w-[44rem] lg:w-[60rem] xl:w-full shadow-md border border-gray-100 dark:border-gray-700 rounded-lg">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300 text-sm xl:text-base">
        <thead className="text-sm xl:text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Verified
            </th>
            <th scope="col" className="px-6 py-4">
              Bank Account
            </th>
            <th scope="col" className="px-6 py-4">
              Salary
            </th>
            <th scope="col" className="px-6 py-4">
              Pay
            </th>
            <th scope="col" className="px-6 py-4">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </td>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td className="px-6 py-4">
                  <button onClick={() => handleToggle(user._id , user.verify)}  className='px-3 py-1'>{user.verify ? '✅' : '❌'}</button>
              </td>
              <td className="px-6 py-4">
                {user.bank_acc}
              </td>
              <td className="px-6 py-4">
                {user.salary}
              </td>
              <td className="px-6 py-4">
                { user.verify ? <button className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700">Pay</button> :
                <button className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-gray-600 rounded cursor-not-allowed border border-gray-500 dark:border-gray-700">Pay</button>
                }
              </td>
              <td className="px-6 py-4">
                <button className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-green-500 border border-green-600 rounded dark:border-green-400 hover:bg-green-700">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
  );
};

export default EmployeeList;
