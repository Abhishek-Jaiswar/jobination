import React from "react";
import IntImage from "../../assets/interview.svg";

const Hero = () => {
  return (
    <div className=" md:flex items-center justify-betwen">
      <div className=" m-auto">
        <div className="flex items-center justify-center text-center">
          <p className=" border-2 border-e-red-500 border-s-orange-400 border-t-gray-800 border-b-gray-800 px-3 py-1 text-base font-semibold bg-white rounded-full ">
            Explore jobs, hire employess
          </p>
        </div>
        <div className="md:px-[10rem] py-2 lg:py-3 lg:px-[20rem]">
          <h1 className=" text-5xl md:text-5xl text-center font-bold text-gray-800">
            Apply on <span className="text-orange-400">Jobenation</span> and get
            hired within an hour
          </h1>
        </div>
        <div className="mx-auto p-0 px-2 md:px-[15rem] lg:px-[25rem]">
          <p className="text-base text-gray-500 font-semibold text-center">
            "Jobenation connects job seekers with employers for rapid hiring.
            Apply now and you could receive a job offer within an hour!"
          </p>
        </div>
        <div>
          <div>
            <input 
            type="text"
             />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
