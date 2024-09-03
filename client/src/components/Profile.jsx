import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Express",
  "MongoDB",
  "Node.js",
];

const Profile = () => {
  const isResume = true;
  return (
    <div className="max-w-7xl mx-auto bg-white py-20">
      <div className=" max-w-5xl mx-auto h-[70vh] p-5  bg-gray-50 rounded-lg">
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-8 ">
            <div>
              <Avatar className="h-20 w-20 rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-xl font-medium">Full Name</h1>
              <p className="text-lg text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                libero!
              </p>
            </div>
          </div>
          <div className="">
            <Button variant="outline" className=" cursor-pointer">
              <Pen className="text-orange-400" />
            </Button>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <div className=" flex flex-col mt-6">
              <h1 className="text-lg text-zinc-800 font-bold py-4">Details</h1>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-orange-500" />
                <span>sdfas</span>
              </div>
              <div className="flex items-center gap-3">
                <Contact className="text-orange-500" />
                <span>sadfas</span>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg text-zinc-800 font-bold py-4">Skills</h1>
              <div className=" space-x-3">
                {skills.length !== 0 ? (
                  skills.map((skill) => <Badge>{skill}</Badge>)
                ) : (
                  <div>
                    <span>N/A</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 ">
            <div className="w-52 h-64 bg-red-50 flex items-center justify-center">
              {isResume ? (
                <img
                  src="https://resumegenius.com/wp-content/uploads/public-health-resume-sample.png"
                  alt="image"
                />
              ) : (
                <span className="text-sm text-zinc-500">
                  Resume Not Available
                </span>
              )}
            </div>
            <div className="mt-8">
              {isResume ? (
                <Button className="w-full">
                  <a target="_blank" href="www.google.com">
                    Download
                  </a>
                </Button>
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto ">
        <div>
          <div className="py-7">
            <h1 className="text-2xl text-zinc-900 font-bold">Applied Jobs</h1>
          </div>
          <AppliedJobsTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
