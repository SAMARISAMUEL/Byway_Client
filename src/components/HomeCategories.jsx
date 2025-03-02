import React from "react";
import { Link } from "react-router";
import { Telescope } from "lucide-react";
import { Atom } from "lucide-react";
import { Briefcase } from "lucide-react";
import { FolderSearch } from "lucide-react";

const HomeCategories = () => {
  return (
    <div className="mt-6 px-28">
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">Top Categories</h2>
        <Link to="/Category-Page" className="text-[#3B82F6] font-semibold">
          See All
        </Link>
      </div>
      <div className="flex justify-between mt-4">
        <div className="border border-[#E2E8F0] w-[20%] rounded-xl">
          <Telescope
            size={30}
            className="text-[#3B82F6] bg-[#E0F2FE] mt-4 w-[30%] h-[50%] ms-20 p-2 rounded-full"
          />
          <h3 className="text-[20px] font-semibold ms-16 ">Astrology</h3>
          <p className="text-[16px] ms-16 ">11 Courses</p>
        </div>
        <div className="border border-[#E2E8F0] w-[20%] rounded-xl">
          <FolderSearch
            size={48}
            className="text-[#3B82F6] bg-[#E0F2FE] mt-4 w-[30%] h-[50%] ms-20 p-2 rounded-full"
          />
          <h3 className="text-[20px] font-semibold ms-16 ">Development</h3>
          <p className="text-[16px] ms-16 ">12 Courses</p>
        </div>
        <div className="border border-[#E2E8F0] w-[20%] rounded-xl">
          <Briefcase
            size={48}
            className="text-[#3B82F6] bg-[#E0F2FE] mt-4 w-[30%] h-[50%] ms-20 p-2 rounded-full"
          />
          <h3 className="text-[20px] font-semibold ms-16 ">Business</h3>
          <p className="text-[16px] ms-16 ">12 Courses</p>
        </div>
        <div className="border border-[#E2E8F0] w-[20%] rounded-xl">
          <Atom
            size={48}
            className="text-[#3B82F6] bg-[#E0F2FE] mt-4 w-[30%] h-[50%] ms-20 p-2 rounded-full"
          />
          <h3 className="text-[20px] font-semibold ms-16 ">Physics</h3>
          <p className="text-[16px] ms-16 ">14 Courses</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
