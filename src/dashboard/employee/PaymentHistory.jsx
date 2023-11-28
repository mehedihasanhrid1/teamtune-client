import React, { useEffect } from 'react';
import usePayment from '../../hooks/usePayment';

const PaymentHistory = () => {
    const [payments] = usePayment();
    useEffect(() => {
        document.title = "Payment History - Employee | Dashboard";
      }, []);
    return (
        <div>
            <div className="my-3 p-5 w-[21rem] md:w-[44rem] lg:w-[56rem] xl:w-[64rem] bg-gray-200 dark:bg-gray-800  shadow-md border border-gray-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full px-8 pt-3 justify-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Payment History
          </h2>
        </div>
        <div className="overflow-x-auto w-[19rem] md:w-[42rem] lg:w-[54rem] xl:w-full">
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
                payments.map((payment) => (
                  <tr
                    key={payment._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {payment.tnxId}
                  </td>
                    <td className="px-6 py-4">${payment.recevied}</td>
                    <td className="px-6 py-4">{payment.payment_for}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Received</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-lg font-semibold pt-5"
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

export default PaymentHistory;