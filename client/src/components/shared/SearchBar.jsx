import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg shadow-md border border-gray-300 px-4 py-3">
      <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
        <FaSearch className="text-2xl text-gray-600" />
        <input
          className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-500"
          type="text"
          placeholder="Job Title, keyword, or company"
        />
      </div>
      <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
        <IoLocationSharp className="text-2xl text-gray-600" />
        <input
          className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-500"
          type="text"
          placeholder='City, zipcode, state, or "Remote"'
        />
      </div>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-200">
        Find Jobs
      </button>
    </div>
  );
};

export default SearchBar;
