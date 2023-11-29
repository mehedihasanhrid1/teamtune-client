import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import useWorkData from "../../hooks/useWorkData";

const WorkSheet = () => {
  const [data] = useUser();
  const [works, loading, refetch] = useWorkData();
  const [formData, setFormData] = useState({
    task: "",
    hours_worked: "",
    date: moment().format("YYYY-MM-DD"),
  });

  useEffect(() => {
    document.title = "Work Sheet - Employee | Dashboard";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workData = {
      name: data.name,
      email: data.email,
      userId: data._id,
      photo: data.photo,
      designation: data.designation,
      tasks: formData.task,
      hours: formData.hours_worked,
      date: formData.date,
    };
    try {
      const res = await axios.post("https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/worksheet", workData);
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Work Submitted successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          task: "",
          hours_worked: "",
          date: moment().format("YYYY-MM-DD"),
        });
      }
    } catch (error) {
      console.error("Error submitting work sheet:", error);
    }
  };

  return (
    <div>
      <div className="my-3 p-5 w-[20rem] md:w-[44rem] lg:w-[60rem] bg-gray-200 dark:bg-gray-800  shadow-md border border-gray-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xl lg:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Submit a Work
        </h2>
        <div className="mb-8 lg:mb-6">
          <form
            className="flex flex-col md:flex-row items-center justify-center gap-5"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label
                htmlFor="task"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
              >
                Task
              </label>
              <select
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
              >
                <option value="">Select a task</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Content">Content</option>
                <option value="Paper Work">Paper Work</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Research">Research</option>
                <option value="Meeting">Meeting</option>
                <option value="Design">Design</option>
                <option value="Testing">Testing</option>
                <option value="Analysis">Analysis</option>
                <option value="Training">Training</option>
                <option value="Documentation">Documentation</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="hours_worked"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
              >
                Hours Work
              </label>
              <input
                type="number"
                name="hours_worked"
                id="hours_worked"
                value={formData.hours_worked}
                onChange={handleChange}
                className="bg-gray-50 border outline-none border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Hours"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="date"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-800 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 outline-none rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-block px-5 py-3 md:mt-[30px] font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto w-[18rem] md:w-[42rem] lg:w-[58rem]">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300 text-sm xl:text-base">
            <thead className="text-sm xl:text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                 Submission ID
                </th>
                <th scope="col" className="px-6 py-4">
                  Task
                </th>
                <th scope="col" className="px-6 py-4">
                  Hours
                </th>
                <th scope="col" className="px-6 py-4">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {works.map((work) => (
                <tr
                  key={work._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {work._id}
                  </td>
                  <td className="px-6 py-4">{work.tasks}</td>
                  <td className="px-6 py-4">{work.hours}</td>
                  <td className="px-6 py-4">{moment(work.date).format('DD MMMM YYYY')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
