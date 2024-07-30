import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaUserTie } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [popOver, setPopover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const isUser = false;

  const dropDownRef = useRef();

  const handlePopUp = () => {
    setPopover((prev) => !prev);
  };

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutSide = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setPopover(false);
    }
  };

  useEffect(() => {
    if (popOver) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [popOver]);

  return (
    <>
      <nav className="max-w-7xl flex items-center m-auto p-3 bg-red">
        <div className="flex flex-1 items-center gap-2">
          <div>
            <p className="inline-block text-2xl font-bold px-2 py-1 bg-orange-400 text-white rounded-md">
              JN
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold uppercase text-orange-400">
              Jobe<span className="text-black">nation</span>
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex text-orange-400 items-center justify-center font-semibold list-none gap-10">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/browse-jobs">
              <li>Browse Jobs</li>
            </Link>
            <Link to="/applied-jobs">
              <li>Applied Jobs</li>
            </Link>
          </ul>

          <div className="md:hidden">
            <FaBars
              onClick={handleMenu}
              className="text-2xl cursor-pointer font-bold text-gray-900"
            />
          </div>

          {isUser ? (
            <div ref={dropDownRef} className="relative">
              <div
                onClick={handlePopUp}
                className="w-11 h-11 cursor-pointer bg-red-200 border border-black rounded-full flex items-center justify-center"
              >
                <h1>H</h1>
              </div>
              <div
                className={`w-[20rem] p-3 bg-red-50 absolute top-16 right-2 rounded-md transition-all duration-300 transform ${
                  popOver ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 cursor-pointer bg-red-100 border border-black rounded-full flex items-center justify-center">
                      <h1>H</h1>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold">
                        Abhishek Jaiswar
                      </p>
                      <p className="text-base text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 pt-4">
                    <div className="group flex items-center gap-2 cursor-pointer">
                      <FaUserTie className="text-2xl group-hover:text-gray-700 text-gray-500" />
                      <button className="font-semibold text-gray-600 group-hover:text-gray-700 group-hover:underline">
                        View profile
                      </button>
                    </div>
                    <div className="flex group cursor-pointer items-center gap-2">
                      <BiLogOut className="text-2xl group-hover:text-gray-700 text-gray-500" />
                      <button className="font-semibold text-gray-600 group-hover:text-gray-700 group-hover:underline">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login">
                <button className="px-5 py-1.5 border border-orange-300 rounded-md text-orange-400 hover:text-white font-semibold hover:bg-orange-400 transition-all duration-200">
                  Login
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="px-5 py-1.5 bg-orange-400 rounded-md text-white font-semibold hover:bg-orange-300 transition-all duration-200">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-400  bg-opacity-50 transition-transform duration-500 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-orange-200 w-[17rem] h-full p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center gap-2">
              <div>
                <p className="inline-block text-2xl font-bold px-2 py-1 bg-orange-400 text-white rounded-md">
                  JN
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold uppercase text-orange-400">
                  Jobe<span className="text-gray-800">nation</span>
                </h1>
              </div>
            </div>
            <div>
              <ImCross onClick={handleMenu} />
            </div>
          </div>
          <div className="mt-10 pl-5">
            <ul className="flex flex-col font-semibold list-none gap-10">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/browse-jobs">
                <li>Browse Jobs</li>
              </Link>
              <Link to="/applied-jobs">
                <li>Applied Jobs</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-28">
            <Link to="/login">
              <button className="px-5 py-1.5 border rounded-md text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="px-5 py-1.5 bg-black rounded-md text-white font-semibold hover:bg-gray-800 transition-all duration-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
