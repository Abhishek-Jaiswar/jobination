import FilterSection from "@/components/FilterSection";
import React from "react";
import Job from "../components/Job";
import { Link } from "react-router-dom";

const jobsArr = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-7">
      <div className="flex mt-10">
        <div className=" w-[14%] h-[81vh]">
          <FilterSection />
        </div>
        <div className="flex-1 h-[81vh] overflow-y-scroll">
          <div>
            {jobsArr.length <= 0 ? (
              <div className="flex items-center h-screen justify-center">
                <span className="text-4xl text-red-500 font-bold">
                  Job not found
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {jobsArr.map((job, idx) => (
                  <div key={idx}>
                    <Job />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
