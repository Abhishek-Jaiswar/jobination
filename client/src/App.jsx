import React from "react";
import Hero from "./pages/Hero";
import Feeds from "./components/shared/Feeds";

const App = () => {
  return (
    <div className="">
      <div className="  mt-28 md:mt-32 w-full flex items-center justify-center flex-col">
        <Hero />
      </div>
      <div className="">
        <Feeds />
      </div>
    </div>
  );
};

export default App;
