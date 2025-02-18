import React, { useState } from "react";
import axiosInstance from "../utils/axios.tsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // Sign up data to store and send to the server
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  // Input validation error messages
  const [errorMessages, setErrorMessages] = useState({});

  // Loading state to show loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // useNavigate to redirect to Login page once SignedUp
  const navigate = useNavigate();

  // Update form data values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(signUpData);
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessages({});
    try {
      const response = await axiosInstance.post("/auth/signup", {
        fullName: signUpData.fullName,
        email: signUpData.email,
        password: signUpData.password,
        avatar: "",
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setErrorMessages(error.response.data || {});
      }
    }
    setIsLoading(false);
  };

  // Google SignUp handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google"; // Redirect to backend
  };

  return (
    <>
      <div>
        <section
          id="signup"
          className="min-h-screen bg-neutral-900 flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md" id="el-goe4eh12">
            {/* Form Container */}
            <div
              className="bg-neutral-800 rounded-xl border border-neutral-700 p-8"
              id="el-5pykxg5s"
            >
              {/* Form Header */}
              <div className="text-center mb-8" id="el-sh8fj31p">
                <h2 className="text-2xl font-bold text-white" id="el-k6aujgsb">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    CaptureAI
                  </span>
                </h2>
                <p className="text-neutral-400 mt-2" id="el-lpuimg77">
                  Sign up your account
                </p>
              </div>

              {/* SignUp with Google */}
              <button
                className=" w-full flex items-center justify-center px-4 py-3 border gap-2 mb-6 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                onClick={handleGoogleLogin}
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Sign up with Google</span>
              </button>

              <div className="relative mb-6" id="el-5t86ay8s">
                <div
                  className="absolute inset-0 flex items-center"
                  id="el-adfuxp0f"
                >
                  <div
                    className="w-full border-t border-neutral-700"
                    id="el-aqm7kawt"
                  ></div>
                </div>
                <div
                  className="relative flex justify-center text-sm"
                  id="el-jfupwodh"
                >
                  <span
                    className="px-2 text-neutral-400 bg-neutral-800"
                    id="el-4lz3sgv1"
                  >
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <form id="el-4q4kzljg" onSubmit={handleFormSubmit}>
                <div className="space-y-4" id="el-cfhszgvk">
                  <div>
                    {errorMessages.fullName && (
                      <p className="text-red-500 text-sm">
                        {errorMessages.fullName}
                      </p>
                    )}
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-1"
                      id="el-0d2woaff"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={signUpData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div id="el-mgbbwzvg">
                    {errorMessages.email && (
                      <p className="text-red-500 text-sm">
                        {errorMessages.email}
                      </p>
                    )}
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-1"
                      id="el-0d2woaff"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={signUpData.email}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200"
                      placeholder="johndoe@example.com"
                      id="el-hcbzl2kd"
                    />
                  </div>

                  <div id="el-3hrdpbws">
                    {errorMessages.password && (
                      <p className="text-red-500 text-sm">
                        {errorMessages.password}
                      </p>
                    )}
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-1"
                      id="el-rc5yb4df"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={signUpData.password}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200"
                      placeholder="••••••••"
                      id="el-olr5f820"
                    />
                  </div>

                  <div
                    className="flex items-center justify-between"
                    id="el-wg2iibe9"
                  >
                    <div className="flex items-center" id="el-sqjb447e">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-neutral-800"
                        id="el-5zd6t2gj"
                      />
                      <label
                        className="ml-2 text-sm text-neutral-400"
                        id="el-ai3d05xj"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg py-3 font-medium transition-all duration-200 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    id="el-k9guaysz"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing up" : "Sign up"}
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <p
                className="mt-6 text-center text-sm text-neutral-400"
                id="el-wtde6u5v"
              >
                Already have an account?
                <Link
                  to="/login"
                  className="text-indigo-500 hover:text-indigo-400 font-medium pl-1"
                  id="el-9kyj31nn"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </section>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
