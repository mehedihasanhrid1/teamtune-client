import React, { useEffect, useState } from "react";
import useAllWork from "../../hooks/useAllWork";
import moment from "moment";

const Progress = () => {
  const [works , loading] = useAllWork();
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  

  useEffect(() => {
    document.title = "Employee Progress - Dashboard";
  }, []);

  useEffect(() => {
    if (loading) {
      setFilteredWorks([]);
    } else {
      setFilteredWorks(works);
    }
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let filteredData = works;

    if (selectedName) {
      filteredData = filteredData.filter((work) => work.name === selectedName);
    }

    if (selectedMonth) {
      filteredData = filteredData.filter(
        (work) => moment(work.date).format("MMMM") === selectedMonth
      );
    }

    if (selectedYear) {
      filteredData = filteredData.filter(
        (work) => moment(work.date).format("YYYY") === selectedYear
      );
    }

    setFilteredWorks(filteredData);
  };

  const uniqueNames = [...new Set(works.map((work) => work.name))];
  const uniqueMonths = [
    ...new Set(works.map((work) => moment(work.date).format("MMMM"))),
  ];
  const uniqueYears = [
    ...new Set(works.map((work) => moment(work.date).format("YYYY"))),
  ];

  const totalWorkHours = filteredWorks.reduce(
    (total, work) => total + Number(work.hours),
    0
  );

  return (
    <div>
      <div className="my-3 p-5 w-[21rem] md:w-[44rem] lg:w-[56rem] xl:w-[64rem] bg-gray-200 dark:bg-gray-800  shadow-md border border-gray-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full px-8 pt-3 justify-between">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Progress Sheet
          </h2>
          <h2 className="text-lg bg-blue-600 lg:text-2xl font-semibold mb-4 text-white py-2.5 px-4 rounded-lg">
            Total Work Hour: {totalWorkHours}
          </h2>
        </div>
        <div className="mb-8 lg:mb-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-5"
          >
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
              >
                Employee Name
              </label>
              <select
                id="name"
                name="name"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
              >
                <option value="">Select a Name</option>
                {uniqueNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="month"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
              >
                Month
              </label>
              <select
                id="month"
                name="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
              >
                <option value="">Select a Month</option>
                {uniqueMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="year"
                className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
              >
                <option value="">Select a Year</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="inline-block px-5 py-3 md:mt-[30px] font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
              >
                Filter
              </button>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto w-[19rem] md:w-[42rem] lg:w-[54rem] xl:w-full">
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
                  Designation
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
              {filteredWorks.length > 0 ? (
                filteredWorks.map((work) => (
                  <tr
                    key={work._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{work.name}</td>
                    <td className="px-6 py-4">{work.email}</td>
                    <td className="px-6 py-4">{work.designation}</td>
                    <td className="px-6 py-4">{work.tasks}</td>
                    <td className="px-6 py-4">{work.hours}</td>
                    <td className="px-6 py-4">
                      {moment(work.date).format("DD MMMM YYYY")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-lg font-semibold pt-4"
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Progress;
