import FilterSection from "@/components/FilterSection";
import React from "react";
import Job from "../pages/Job";

const jobsArr = [1, 2, 3, 4, 5, 6, 7, 8];

const BrowseJobs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-7">
      <div className="">
        <h1 className="text-2xl font-bold text-zinc-900">Find Your Next Opportunity: Explore Top Job Openings</h1>
        <p className="text-sm text-zinc-600">
          Welcome to your gateway to exciting career opportunities! Browse
          through the latest job openings across various industries.
        </p>
      </div>
      <div className=" ">
        <div>
          <FilterSection />
        </div>
        <div>
          {jobsArr.map((job) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
