import React, { useEffect } from "react";
import useAllEmployee from "../../hooks/useAllEmployee";
import axios from "axios";
import Swal from "sweetalert2";

const AllEmployee = () => {
  const [users, loading, refetch] = useAllEmployee();
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
        await axios.patch(`http://localhost:5000/make-hr/${userId}`, {
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

  const fireEmployee = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Fire Employee",
        text: "Are you sure you want to fire this employee?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, fire employee!",
      });

      if (result.isConfirmed) {
        await axios.patch(`http://localhost:5000/fire/${userId}`, {
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
                Designation
              </th>
              <th scope="col" className="px-6 py-4">
                Make HR
              </th>
              <th scope="col" className="px-6 py-4">
                Fire
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
                  {user.role === "user" ? (
                    <button onClick={() => makeHR(user._id)} className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700">
                      Make HR
                    </button>
                  ) : (
                    <button className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-green-600 rounded cursor-not-allowed border dark:border-green-400 border-green-500">
                      HR
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  {user.fired ? (
                    <button className="inline-block pl-4 pr-5 py-3 font-bold text-lg leading-none text-red-600 dark:text-red-400 cursor-not-allowed">
                    Fired
                    </button>
                  ) : (
                    <button onClick={() => fireEmployee(user._id)} className="inline-block px-5 py-3 font-semibold leading-none text-gray-100 bg-red-500 border border-red-600 rounded dark:border-red-400 hover:bg-red-700">
                      Fire
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployee;
