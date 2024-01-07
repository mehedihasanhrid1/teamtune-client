import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useEmployeeList from "../hooks/useEmployeeList";

const EmployeeHrList = () => {
  const [users, loading, refetch] = useEmployeeList();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    document.title = "Employee List - Dashboard";
  }, []);

  const userSalary = Number(employee.salary);

  useEffect(() => {
    if (userSalary > 0) {
      axios
        .post("https://team-tune-server.vercel.app/paymentintent", { salary: userSalary })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [userSalary]);

  const months = moment.months();

  const years = Array.from({ length: 26 }, (_, index) => 2020 + index);

  const handleSeeDetails = (email) => {
    navigate(`/dashboard/hr/employee-details/${email}`);
  };

  const handlePayment = (user) => {
    setEmployee(user);
    setOpen(!open);
  };

  const handleMakePayment = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://team-tune-server.vercel.app/payments/${employee.email}`
    );

    const existingPayment = response.data.find(
      (payment) => payment.payment_for === `${selectedMonth} ${selectedYear}`
    );

    if (existingPayment) {
      setOpen(false);
      setSelectedMonth("");
      setSelectedYear("");
      Swal.fire({
        icon: "error",
        title: "Payment Error!",
        text: `You have already paid for ${selectedMonth} ${selectedYear}.`,
      });
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setPaymentError(error.message);
    } else {
      setPaymentError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: employee.name,
            email: employee.email,
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error!");
    } else {
      if (paymentIntent.status === "succeeded") {
        setOpen(false);
        setSelectedMonth("");
        setSelectedYear("");
        const payment = {
          name: employee.name,
          email: employee.email,
          photo: employee.photo,
          designation: employee.designation,
          salary: employee.salary,
          tnxId: paymentIntent.id,
          userId: employee._id,
          payment_for: `${selectedMonth} ${selectedYear}`,
          recevied: parseInt(paymentIntent.amount / 100),
        };

        const res = await axios.post("https://team-tune-server.vercel.app/payments", payment);
        if (res.data.insertedId) {
          setEmployee({});
          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  const handleToggle = async (userId, verified) => {
    try {
      const response = await axios.patch(
        `https://team-tune-server.vercel.app/users/${userId}`,
        { verify: !verified }
      );
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Verification Status Updated",
          text: "The verification status has been updated successfully.",
        });
      }
      refetch();
    } catch (error) {
      console.error("Error updating verification status", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto w-80 md:w-[44rem] lg:w-[60rem] xl:w-[68rem] shadow-md border border-gray-100 dark:border-gray-700 rounded-lg">
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
              <tr
                key={user._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleToggle(user._id, user.verify)}
                    className="px-3 py-1"
                  >
                    {user.verify ? "✅" : "❌"}
                  </button>
                </td>
                <td className="px-6 py-4">{user.bank_acc}</td>
                <td className="px-6 py-4">${user.salary}</td>
                <td className="px-6 py-4">
                  {user.verify ? (
                    <button
                      onClick={() => handlePayment(user)}
                      className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-500 rounded dark:border-blue-600 hover:bg-blue-700"
                    >
                      Pay
                    </button>
                  ) : (
                    <button className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-gray-600 rounded cursor-not-allowed border border-gray-500 dark:border-gray-700">
                      Pay
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleSeeDetails(user.email)}
                    className="inline-block px-5 py-3  font-semibold leading-none text-gray-100 bg-green-500 border border-green-600 rounded dark:border-green-400 hover:bg-green-700"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center justify-center my-2">
          <DialogHeader>Pay, {employee.name}</DialogHeader>
          <img
            className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover"
            src={employee.photo}
            alt=""
          />
          <p className="px-5 mt-3 text-lg text-gray-700 font-medium text-center">
            Confirm Payment Details
          </p>
        </div>
        <DialogBody>
          <div className="px-5 flex items-center justify-between">
            <h2 className="text-gray-800 text-xl font-semibold">
              Salary:{" "}
              <span className="text-gray-700 font-medium ml-1">
                ${employee.salary}
              </span>
            </h2>
            <h2 className="text-gray-800 text-xl font-semibold">
              Designation:{" "}
              <span className="text-gray-700 font-medium ml-1">
                {employee.designation}
              </span>
            </h2>
          </div>
          <form className="px-5 mt-5" onSubmit={handleMakePayment}>
            <div className="flex mb-5 flex-col md:flex-row items-center justify-center gap-5">
              <div className="w-full">
                <label
                  htmlFor="month"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Select Month
                </label>
                <select
                  id="month"
                  name="month"
                  value={selectedMonth}
                  required
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
                >
                  <option value="">Select a Month</option>
                  {months.map((month) => (
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
                  Select Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear}
                  required
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white outline-none"
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#263238",
                    "::placeholder": {
                      color: "#78909c",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
                hidePostalCode: true,
              }}
            />
            <div className="pt-5">
              <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className={`w-full px-5 py-3 font-semibold border rounded-md uppercase leading-none text-white text-lg ${ stripe || clientSecret ? 'bg-blue-600  border-blue-500  hover:bg-blue-700' : 'bg-gray-700 border-gray-600 cursor-not-allowed'}`}
              >
                Pay
              </button>
            </div>
            <div className="pt-4">
              <p className="text-red-600 text-center font-medium text-lg">
                {paymentError}
              </p>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="mb-2 -mt-6 mr-5">
          <Button className="text-sm"
            color="red"
            onClick={() => {
              setOpen(!open);
              setPaymentError("");
              setSelectedMonth("");
              setSelectedYear("");
            }}
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default EmployeeHrList;
