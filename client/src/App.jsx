import React from "react";
import Hero from "./pages/Hero";
import CategoryCrousal from "./components/CategoryCrousal";
import LatestJobs from "./components/LatestJobs";


const App = () => {
  return (
    <div className="">
      <div className="  mt-28 md:mt-32 w-full flex items-center justify-center flex-col">
        <Hero />
      </div>
      <div className=" max-w-7xl mx-auto overflow-hidden">
        <CategoryCrousal />
      </div>
      <div className=" max-w-7xl mx-auto overflow-hidden">
        <LatestJobs />
      </div>
    </div>
  );
};

export default App;
