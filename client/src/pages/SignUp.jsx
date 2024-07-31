import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { USER_API_ENDPOINT } from "../utils/constants";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });
    } catch (error) {}
  };

  return (
    <div className="mt-6 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className=" w-[20rem] md:w-[25rem] lg:w-[30rem]"
      >
        <div className="flex items-center justify-start mb-6">
          <h1 className="text-3xl text-orange-400 font-bold">
            Start Your Job Hunt with Us
          </h1>
        </div>
        <div className="py-2 flex flex-col gap-1">
          <label
            className="text-base text-gray-800 font-semibold"
            htmlFor="fullname"
          >
            Full name
          </label>
          <input
            className="w-full px-3 py-2 border-2 border-gray-400 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
          />
        </div>
        <div className="py-2 flex  flex-col gap-1">
          <label
            className="text-base text-gray-800 font-semibold"
            htmlFor="fullname"
          >
            Email{" "}
          </label>
          <input
            className="w-full px-3 py-2 border-2 border-gray-400 rounded-md placeholder:text-gray-500"
            type="email"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
          />
        </div>
        <div className="py-2 flex  flex-col gap-1">
          <label
            className="text-base text-gray-800 font-semibold"
            htmlFor="fullname"
          >
            {" "}
            Password
          </label>
          <input
            className="w-full px-3 py-2 border-2 border-gray-400 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
          />
        </div>
        <div className="py-4">
          <label htmlFor="role" className="text-base font-semibold ">
            Select Role
            <div className="grid grid-cols-2 gap-2 py-1">
              <div>
                <input
                  type="radio"
                  id="jobseeker"
                  name="role"
                  value="Jobseeker"
                  checked={input.role === "Jobseeker"}
                  onChange={changeEventHandler}
                  className="hidden" // Hide the radio button itself
                />
                <label
                  htmlFor="jobseeker"
                  className={`block text-center p-4 transition-all duration-200 border rounded cursor-pointer ${
                    input.role === "Jobseeker"
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Jobseeker
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="recruiter"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="hidden" // Hide the radio button itself
                />
                <label
                  htmlFor="recruiter"
                  className={`block text-center transition-all duration-200 p-4 border rounded cursor-pointer ${
                    input.role === "Recruiter"
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Recruiter
                </label>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <label
                  htmlFor="profile-upload"
                  className="font-semibold text-gray-800"
                >
                  Profile
                </label>
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  className="cursor-pointer block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-orange-400 file:text-white
                   hover:file:bg-orange-500"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
          </label>
        </div>
        <div>
          <button className="w-full mt-2 bg-orange-400 hover:bg-orange-300 text-white font-semibold py-2 rounded-md">
            Sign Up
          </button>
        </div>
        <div className="py-1">
          <p className="text-base text-gray-800 font-semibold">
            Already have an account?{" "}
            <Link to="/login" className=" underline text-gray-600 font-normal">
              Login here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
