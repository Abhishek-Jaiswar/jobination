import React, { useRef } from "react";
import { Button } from "./ui/button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Graphic Designer",
  "DevOps Engineer",
  "Cloud Architect",
  "Cybersecurity Specialist",
  "Mobile Developer",
  "Full Stack Developer",
  "UX/UI Designer",
  "Project Manager",
  "Database Administrator",
  "Product Manager",
];

const CategoryCrousal = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-4">
      <div
        onClick={scrollLeft}
        className="w-10 h-10 cursor-pointer text-black font-extrabold text-2xl flex items-center justify-center px-3 rounded-full bg-gray-200 active:bg-gray-300"
      >
        <BiLeftArrow />
      </div>
      <div
        ref={carouselRef}
        className="flex items-start justify-start gap-10 overflow-x-auto no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {category.map((cat, i) => (
          <div key={i}>
            <Button variant="outline">{cat}</Button>
          </div>
        ))}
      </div>
      <div
        onClick={scrollRight}
        className="w-10 h-10 cursor-pointer text-black font-extrabold text-2xl flex items-center justify-center px-3 rounded-full bg-gray-200 active:bg-gray-300"
      >
        <BiRightArrow />
      </div>
    </div>
  );
};

export default CategoryCrousal;
