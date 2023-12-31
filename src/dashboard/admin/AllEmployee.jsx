import React, { useEffect, useState } from "react";
import useAllEmployee from "../../hooks/useAllEmployee";
import axios from "axios";
import Swal from "sweetalert2";

const AllEmployee = () => {
  const [users, loading, refetch] = useAllEmployee();
  const [tableView, setTableView] = useState(true);
  useEffect(() => {
    document.title = "All Employee List - Admin | Dashboard";
  }, []);

  const makeHR = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Make HR",
        text: "Are you sure you want to make this user an HR?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make HR!",
      });
      if (result.isConfirmed) {
        await axios.patch(`https://team-tune-server.vercel.app/make-hr/${userId}`, {
          role: "hr",
        });
        refetch();
        Swal.fire({
          title: "Success!",
          text: "The user has been made an HR.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error making user HR:", error);
    }
  };

  const deleteEmployee = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Delete Employee Data",
        text: "Are you sure you want to delete this employee data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      });

      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://team-tune-server.vercel.app/delete/${userId}`
        );
        if (res.data) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: "The employee has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error deleteing employee:", error);
    }
  };

  const fireEmployee = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Fire Employee",
        text: "Are you sure you want to fire this employee?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, fire!",
      });

      if (result.isConfirmed) {
        await axios.patch(`https://team-tune-server.vercel.app/fire/${userId}`, {
          fired: true,
        });
        refetch();
        Swal.fire({
          title: "Success!",
          text: "The employee has been fired.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error firing employee:", error);
    }
  };

  const appointEmployee = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Re Appoint Employee",
        text: "Are you sure you want to re-appoint this employee?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, appoint!",
      });

      if (result.isConfirmed) {
        await axios.patch(`https://team-tune-server.vercel.app/fire/${userId}`, {
          fired: false,
        });
        refetch();
        Swal.fire({
          title: "Success!",
          text: "The employee has been re-appointed.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error reappointing employee:", error);
    }
  };

  

  return (
    <div>
      <div className="mb-6 md:mb-8 mt-2 flex items-center justify-center">
        <button
          onClick={() => setTableView(!tableView)}
          className="px-5 py-2.5 bg-blue-500 text-lg font-medium text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {tableView ? "Switch to Card View" : "Switch to Table View"}
        </button>
      </div>

      {tableView ? (
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
                  Designation
                </th>
                <th scope="col" className="px-6 py-4">
                  Make HR
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Fire
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  data
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1">
                      {user.verify ? "✅" : "❌"}
                    </button>
                  </td>
                  <td className="px-6 py-4">{user.designation}</td>
                  <td className="px-6 py-4">
                    {user.role === "user" && !user.fired && (
                      <button
                        onClick={() => makeHR(user._id)}
                        className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
                      >
                        Make HR
                      </button>
                    )}

                    {user.role === "user" && user.fired && (
                      <button className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-gray-500 border border-gray-400 rounded dark:bg-gray-600 dark:border-gray-500 cursor-not-allowed">
                        Make HR
                      </button>
                    )}

                    {user.role === "hr" && (
                      <button
                        onClick={() => makeHR(user._id)}
                        className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-green-600 rounded cursor-not-allowed border dark:border-green-400 border-green-500"
                      >
                        HR
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {user.fired ? (
                      <button
                        onClick={() => appointEmployee(user._id)}
                        className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-orange-500 border border-orange-600 rounded dark:border-orange-400 hover:bg-orange-600"
                      >
                        Fired
                      </button>
                    ) : (
                      <button
                        onClick={() => fireEmployee(user._id)}
                        className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-red-500 border border-red-600 rounded dark:border-red-400 hover:bg-red-700"
                      >
                        Fire
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {(user.fired && (
                      <button
                        onClick={() => deleteEmployee(user._id)}
                        className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-red-500 border border-red-600 rounded dark:border-red-400 hover:bg-red-700"
                      >
                        Delete
                      </button>
                    )) || (
                      <button className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-gray-500 border border-gray-400 rounded dark:bg-gray-600 dark:border-gray-500 cursor-not-allowed">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user) => (
              <div key={user._id}>
                <div className="bg-gray-50 w-80 p-6 dark:bg-gray-700 border-gray-100 dark:border-gray-700 border rounded-lg shadow-md">
                  <div className="pt-3 pb-2">
                    <p className="font-semibold text-2xl text-gray-800 dark:text-gray-50">
                      {user.name}
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold mt-2">
                      Email:
                      <span className="text-gray-600 ml-1 text-sm dark:text-gray-400">
                        {user.email}
                      </span>
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold mt-1">
                      Varifaction Status:
                      <span className="text-gray-600 ml-1 font-normal dark:text-gray-400">
                        {user.verify ? "Verified" : "Not Verified"}
                      </span>
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold mt-1">
                      Designation:
                      <span className="text-gray-600 ml-1 font-normal dark:text-gray-400">
                        {user.designation}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-3">
                    <div>
                      {user.role === "user" && !user.fired && (
                        <button
                          onClick={() => makeHR(user._id)}
                          className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
                        >
                          Make HR
                        </button>
                      )}

                      {user.role === "hr" && (
                        <button
                          onClick={() => makeHR(user._id)}
                          className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-green-600 rounded cursor-not-allowed border dark:border-green-400 border-green-500"
                        >
                          HR
                        </button>
                      )}
                    </div>
                    <div>
                      {user.fired ? (
                        <button
                        onClick={() => appointEmployee(user._id)}
                        className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-orange-500 border border-orange-600 rounded dark:border-orange-400 hover:bg-orange-600"
                      >
                        Fired
                      </button>
                      ) : (
                        <button
                          onClick={() => fireEmployee(user._id)}
                          className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-red-500 border border-red-600 rounded dark:border-red-400 hover:bg-red-700"
                        >
                          Fire
                        </button>
                      )}
                    </div>
                    <div>
                      {user.fired && (
                        <button
                          onClick={() => deleteEmployee(user._id)}
                          className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-red-500 border border-red-600 rounded dark:border-red-400 hover:bg-red-700"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployee;
