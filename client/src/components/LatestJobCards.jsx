import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="border border-zinc-300 p-4 rounded-lg cursor-pointer hover:shadow-md">
      <div>
        <h1 className="font-medium text-lg text-zinc-900">Company name</h1>
        <p className="text-sm text-zinc-700 font-medium">India</p>
      </div>
      <div>
        <h1 className="text-lg font-bold pt-4">Job title</h1>
        <p className="text-sm text-zinc-800 font-semibold pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          aliquid.
        </p>
      </div>
      <div className="">
        <Badge variant='outline' className='text-red-600 mr-2'>12 Openings</Badge>
        <Badge variant='outline' className='text-orange-600 mr-2' >Part time</Badge>
        <Badge variant='outline' className='text-yellow-600 mr-2'>12LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
