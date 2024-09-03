import React from "react";
import LatestJobCards from "./LatestJobCards";
const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="text-4xl text-zinc-800 font-bold">
          <span className="text-orange-400">Top Job Openings</span> Available
          Now
        </h1>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5  ">
          {jobs.map((job) => (
            <LatestJobCards />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
