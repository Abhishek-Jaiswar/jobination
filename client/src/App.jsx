import React from "react";
import Hero from "./components/shared/Hero";
import PopularFeeds from "./components/shared/PopularFeeds";

const App = () => {
  return (
    <div className="">
      <div className="mt-28 md:mt-32 w-full flex items-center justify-center flex-col">
        <Hero />
        <PopularFeeds />
      </div>
    </div>
  );
};

export default App;
