import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = 1;
  return (
    <div className="border border-zinc-200 p-4 rounded-lg hover:shadow-md">
      <div className="flex items-start justify-between">
        <Badge variant="outline" className={"text-xs text-zinc-900"}>
          Posted: 2 days ago
        </Badge>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="text-[.5rem]" />
        </Button>
      </div>
      <div className="flex items-center justify-start gap-3">
        <Button variant="outline" className="p-5" size="icon">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium text-zinc-800">Company Name</h1>
          <p className="text-sm text-zinc-600 font-semibold">Loaction: India</p>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-md text-zinc-800 font-medium">Job Tilte</h1>
        <p className="text-sm text-zinc-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          doloremque.
        </p>
      </div>
      <div className=" mt-4">
        <Badge variant="outline" className="text-red-600 mr-2">
          12 Openings
        </Badge>
        <Badge variant="outline" className="text-orange-600 mr-2">
          Part time
        </Badge>
        <Badge variant="outline" className="text-yellow-600 mr-2">
          12LPA
        </Badge>
      </div>
      <div className="mt-4 flex justify-start gap-2">
        <Button variant="outline">Save for later</Button>
        <Button onClick={() => navigate(`/description/${jobId}`)} className="bg-orange-500">Apply</Button>
      </div>
    </div>
  );
};

export default Job;
