import React, { useEffect, useState } from "react";
import usePayment from "../../hooks/usePayment";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const PaymentHistory = () => {
  const [payments, loading, refetch] = usePayment();
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    document.title = "Payment History - Employee | Dashboard";
  }, []);

  const lastPage = currentPage * dataPerPage;
  const firstPage = lastPage - dataPerPage;
  const paginate = payments.slice(firstPage, lastPage);

  return (
    <div>
      <div className="my-3 p-5 w-[20rem] md:w-[44rem] lg:w-[56rem] xl:w-[64rem] bg-gray-200 dark:bg-gray-800  shadow-md border border-gray-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full px-8 pt-3 justify-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Payment History
          </h2>
        </div>
        <div className="overflow-x-auto w-[18rem] md:w-[42rem] lg:w-[54rem] xl:w-full">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300 text-sm xl:text-base">
            <thead className="text-sm xl:text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Transaction Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Amount
                </th>
                <th scope="col" className="px-6 py-4">
                  Month
                </th>
                <th scope="col" className="px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                paginate.map((payment) => (
                  <tr
                    key={payment._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                      {payment.tnxId}
                    </td>
                    <td className="px-6 py-4">${payment.recevied}</td>
                    <td className="px-6 py-4">{payment.payment_for}</td>
                    <td className="px-6 py-4 text-green-600 dark:text-green-500 text-lg font-bold">
                      Received
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-lg font-semibold pt-5"
                  >
                    {loading
                      ? "Payment Data is Loading"
                      : "No payment data found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 pt-5 flex items-center justify-center">
          <div>
            <ul className="flex items-center justify-center flex-wrap gap-2">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded bg-blue-100 text-gray-900  dark:bg-gray-600 border border-gray-300 dark:border-gray-500 hover:bg-blue-600 dark:text-gray-300 dark:hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2"
                >
                  <GrLinkPrevious />
                  <span>Privious</span>
                </button>
              </li>
              {Array.from({
                length: Math.ceil(payments.length / dataPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded border ${currentPage === index + 1 ? 'bg-blue-500 text-white border-blue-600' : 'bg-blue-100 text-gray-900  dark:bg-gray-600  border-gray-300 dark:border-gray-500 hover:bg-blue-600 dark:text-gray-300 dark:hover:bg-blue-500 hover:text-white'}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === Math.ceil(payments.length / dataPerPage)}
                  className="px-4 py-2 rounded bg-blue-100 text-gray-900  dark:bg-gray-600 border border-gray-300 dark:border-gray-500 hover:bg-blue-600 dark:text-gray-300 dark:hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2"
                >
                  <span>Next</span> <GrLinkNext />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
