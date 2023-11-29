import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Register = () => {
  const { createUser, updateUser, logOut , googleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    document.title = "Start Your Journey with Us: Sign Up";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const bankacc = e.target.bankaccount.value;
    const salary = e.target.salary.value;
    const role = e.target.role.value;
    const designation = e.target.designation.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    }

    const formData = new FormData();
    formData.append("key", import.meta.env.VITE_IMGBBAPI);
    formData.append("image", photo);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoURL = data.data.display_url;

        createUser(email, password).then((result) => {
          const user = result.user;

          updateUser(user, name, photoURL)
            .then(() => {
              const userData = {
                name: name,
                role: role,
                email: email,
                photo: photoURL,
                bank_acc: bankacc,
                salary: salary,
                designation: designation,
                verify: false,
                acc_status: "active",
                fired: false,
              };

              logOut();

              axios
                .post("https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/users", userData)
                .then((res) => {
                  if (res.data.insertedId) {
                    Swal.fire({
                      icon: "success",
                      title: "Account created successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
              
              navigate("/login");
              
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    const bankacc = e.target.bankaccount.value;
    const salary = e.target.salary.value;
    const role = e.target.role.value;
    const designation = e.target.designation.value;
  
    try {
      const response = await googleLogin();
  
      const name = response.user?.displayName;
      const email = response.user?.email;
      const photoURL = response.user?.photoURL;
  
      const userData = {
        name: name,
        role: role,
        email: email,
        photo: photoURL,
        bank_acc: bankacc,
        salary: salary,
        designation: designation,
        verify: false,
        acc_status: "active",
        fired: false,
      };

      setOpen(false);
      logOut();
  
      axios.post("https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/users", userData)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Account created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      navigate("/login");

    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
    <section
      className="flex flex-wrap relative items-center justify-center"
      style={{
        backgroundImage: 'url("https://i.ibb.co/R76w4zm/login.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="px-5 py-10 md:py-12 lg:py-14">
          <div className="max-w-2xl lg:p-12 shadow-md rounded-lg px-6 py-8 mx-auto text-center bg-[#dbeafe55] dark:bg-[#1118276e]">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:mb-4 lg:text-5xl dark:text-gray-100">
              Create New Account
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 font-medium dark:text-gray-200 mb-4 md:mb-6">
              Join with us!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="name"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="bankaccount"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Bank AC
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="bankaccount"
                  id="bankaccount"
                  placeholder="Bank Account Number"
                  required
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="salary"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Salary
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="salary"
                  id="salary"
                  placeholder="Your Monthly Salary"
                  required
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="role"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Role
                </label>
                <select
                  className="w-full cursor-pointer px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="role"
                  id="role"
                  required
                >
                  <option value="user">Employee</option>
                  <option value="HR" disabled>
                    HR (Read-only)
                  </option>
                  <option value="Admin" disabled>
                    Admin (Read-only)
                  </option>
                </select>
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="designation"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Designation
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="designation"
                  id="designation"
                  placeholder="Employee Designation"
                  required
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="email"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="password"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                  <svg
                    onClick={() => setShowPassword(!showPassword)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="absolute right-0 mr-4 dark:text-gray-300 cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                  </svg>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="photo"
                  className="block lg:text-lg text-left text-gray-900 dark:text-gray-100 font-medium mb-2"
                >
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/*"
                  className="w-full px-4 py-3 bg-[#ffffff96] placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-lg lg:py-4 outline-none text-gray-800 dark:text-gray-100 dark:bg-[#334155aa]"
                  required
                />
              </div>

              {passwordError && (
                <div className="flex justify-start mb-3 md:text-lg font-medium">
                  <ul>
                    <li className="flex items-center py-1 gap-2 text-red-600 dark:text-red-500">
                      <span className="text-xl">
                        <FaTimes />
                      </span>
                      <span>{passwordError}</span>
                    </li>
                  </ul>
                </div>
              )}

              <button
                className="w-full px-4 py-3 text-sm font-bold text-gray-100 uppercase bg-blue-600 rounded-md lg:text-lg dark:text-gray-300 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900"
                type="submit"
              >
                Sign Up
              </button>
              <div className="my-3 lg:my-6">
                <div className="flex items-center gap-1">
                  <hr className="h-[1.5px] bg-blue-gray-700 dark:bg-gray-400 border-none w-full" />
                  <p className="md:text-lg text-blue-gray-800 dark:text-gray-300">
                    OR
                  </p>
                  <hr className="h-[1.5px] bg-blue-gray-700 dark:bg-gray-400 border-none w-full" />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                  <div className="flex items-center justify-center p-3 bg-blue-800 rounded-md hover:bg-blue-600 dark:hover:bg-gray-800 cursor-pointer">
                    <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                      Facebook
                    </span>
                  </div>
                </div>
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                  <div
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center p-3 bg-red-700 rounded-md dark:bg-red-700 hover:bg-red-500 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                      Google
                    </span>
                  </div>
                </div>
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/3">
                  <div className="flex items-center justify-center p-3 bg-gray-800 rounded-md dark:bg-gray-500 hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
                    <span className="inline-block mr-2 text-gray-300 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-apple"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                      Apple
                    </span>
                  </div>
                </div>
              </div>
              <p className="px-2 mt-6 text-sm md:text-base text-left text-gray-900 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-2 text-base lg:text-lg font-semibold text-blue-gray-900 hover:text-blue-gray-800 dark:text-blue-300 dark:hover:text-blue-400"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center justify-center my-2">
          <DialogHeader>Google Sign Up</DialogHeader>
          <p className="px-5 text-center">Some more information need for complete signup!</p>
        </div>
          <form className="px-5 mb-3 space-y-4 md:space-y-6" onSubmit={handleGoogleSignup}>
        <DialogBody>
            <div>
              <label htmlFor="bankaccount"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Bank AC
              </label>
              <input
                type="text"
                name="bankaccount"
                id="bankaccount"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                placeholder="Bank Account Number"
                required
              />
            </div>
            <div>
              <label htmlFor="salary"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Salary
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                placeholder="Your Monthly Salary"
                required
              />
            </div>
            <div>
              <label htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Role
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                name="role"
                id="role"
                required
              >
                <option value="user">Employee</option>
                <option value="HR" disabled>
                  HR (Read-only)
                </option>
                <option value="Admin" disabled>
                  Admin (Read-only)
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="designation"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                placeholder="Employee Designation"
              />
            </div>
        </DialogBody>
        <DialogFooter className="mr-2">
          <Button
            color="red"
            onClick={() => {
              setOpen(!open);
            }}
            className="mr-4"
            >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" type="submit">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
            </form>
      </Dialog>
    </section>
  );
};

export default Register;
