import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState(null);
  const { signIn, googleLogin, logOut } = useAuth();

  useEffect(() => {
    document.title = "Sign In to Your Account - Team Tune";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);

      const firedUser = await axios.get(`https://team-tune-server.vercel.app/user/${email}`);

      if (firedUser.data.fired) {
        Swal.fire({
          icon: "error",
          title: "You have been fired!",
          text: "You can't login now.",
        });

        logOut();
      } else {
        navigate(location?.state ? location?.state : "/");
      }
    } catch (error) {
      setLoginError("Invalid email or password");
      console.error("Sign-in failed:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await googleLogin();
      const email = response.user?.email;

      try {
        const userExists = await axios.get(
          `https://team-tune-server.vercel.app/user/${email}`
        );

        if (userExists.data) {
          if (userExists.data.fired) {
            Swal.fire({
              icon: "error",
              title: "You have been fired!",
              text: "You can't login now.",
            });
            logOut();
          } else {
            navigate(location?.state ? location?.state : "/");
          }
        } else {
          logOut();
          setLoginError("Failed to sign in.");
          navigate("/login");
        }
      } catch (error) {
        Swal.fire({
          title: "You are a new user!",
          text: "You have to create a new account with google first.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sign Up",
        }).then((result) => {
          if (result.isConfirmed) {
            logOut();
            navigate("/register");
          }
        });
      }
    } catch (error) {
      console.error(error.message);
      setLoginError("Failed to sign in with Google");
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
          <div className="max-w-xl lg:p-12 shadow-md rounded-lg p-6 mx-auto text-center bg-[#dbeafe55] dark:bg-[#1118276e]">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:mb-4 lg:text-5xl dark:text-gray-100">
              Login your account
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 font-medium dark:text-gray-200 mb-4 md:mb-6">
              Welcome Back!
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-4 lg:mb-5">
                <label
                  htmlFor="email"
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
              <div className="mb-5 lg:mb-6">
                <label
                  htmlFor="password"
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
              <div
                className={`flex items-center justify-between ${
                  loginError ? "mb-1" : "mb-4"
                }`}
              >
                <label
                  htmlFor="remember"
                  className="flex items-center justify-center text-gray-800 dark:text-gray-300"
                >
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-2 h-4 w-4 cursor-pointer"
                  />
                  <span className="text-sm lg:text-base text-gray-900 dark:text-gray-200">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm lg:text-base font-semibold text-blue-gray-900 hover:text-blue-gray-800 dark:text-blue-300 dark:hover:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>
              {loginError && (
                <div className="flex justify-start lg:mt-1 mb-3 md:text-lg font-medium">
                  <ul>
                    <li className="flex items-center py-1 gap-2 text-red-600 dark:text-red-500">
                      <span className="text-xl">
                        <FaTimes />
                      </span>
                      <span>{loginError}</span>
                    </li>
                  </ul>
                </div>
              )}
              <button
                className="w-full px-4 py-3 text-sm font-bold text-gray-100 uppercase bg-blue-600 rounded-md lg:text-lg dark:text-gray-300 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900"
                type="submit"
              >
                LOGIN
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
                    onClick={handleGoogleLogin}
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
                If you don't have an account?
                <Link
                  to="/register"
                  className="ml-2 text-base font-semibold text-blue-gray-900 hover:text-blue-gray-800 dark:text-blue-300 dark:hover:text-blue-400"
                >
                  Create new account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
