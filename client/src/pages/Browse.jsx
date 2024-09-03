import Job from "@/components/Job";
import React from "react";

const jabs = [1, 2, 3, 1];

const Browse = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-2xl text-zinc-800 pb-5">
        Search results ({jabs.length})
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {jabs.map((items, idx) => (
          <div key={idx}>
            <Job />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
