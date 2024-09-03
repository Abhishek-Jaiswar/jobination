import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import store from "@/redux/store";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/users/login`, input, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="mt-12 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className=" w-[20rem] md:w-[25rem] lg:w-[30rem]"
      >
        <div className="flex items-center justify-start mb-6">
          <h1 className="text-3xl text-orange-400 font-bold">
            Welcome Back, Job Seeker!
          </h1>
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
            name="email"
            value={input.email}
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
            name="password"
            value={input.password}
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
                  value="jobseeker"
                  checked={input.role === "jobseeker"}
                  onChange={changeEventHandler}
                  className="hidden" // Hide the radio button itself
                />
                <label
                  htmlFor="jobseeker"
                  className={`block text-center p-4 transition-all duration-200 border rounded cursor-pointer ${
                    input.role === "jobseeker"
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
            </div>
          </label>
        </div>
        <div>
          <button className="w-full mt-2 bg-orange-400 hover:bg-orange-300 text-white font-semibold py-2 rounded-md">
            {loading ? (
              <span className=" flex items-center justify-center gap-2">
                <Loader2 className="text-2xl text-white animate-spin" /> Please
                wait..
              </span>
            ) : (
              <span>Login</span>
            )}
          </button>
        </div>
        <div className="py-1">
          <p className="text-base text-gray-800 font-semibold">
            Dont't have an account?{" "}
            <Link
              to="/sign-up"
              className=" underline text-gray-600 font-normal"
            >
              Signup here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
