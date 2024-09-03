import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Loaction",
    locations: ["Mumbai", "Gurgoan", "Pune", "Bangalore", "Hydrabad"],
  },
  {
    filterType: "Industry",
    locations: [
      "Frontend developer",
      "backend develpoer",
      "FullStack developer",
      "Data scientist",
    ],
  },
  {
    filterType: "Salary",
    locations: ["0-40k", "42-1lakh", "1lakh-5lakhs", "Bangalore", "Hydrabad"],
  },
];

const FilterSection = () => {
  return (
    <div>
      <div className="border-b border-b-zinc-300 pb-4">
        <h1>Filter Jobs</h1>
      </div>
      <div>
        <RadioGroup>
          {filterData.map((filter) => (
            <div className="mb-6">
              <h1 className="text-lg text-zinc-800 font-medium">{filter.filterType}</h1>
              {filter.locations.map((loc,idx) => (
                <div className="flex items-center gap-2 mt-2 ml-3">
                  <RadioGroupItem value={loc} />
                  <Label>{loc}</Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSection;
