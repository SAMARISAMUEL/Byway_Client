import React from "react";
import { Link } from "react-router";
import CoursesCard from "./ReUseable/CoursesCard";

const HomeCourses = () => {
  return (
    <div className="mt-6 px-28">
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">Top Courses</h2>
        <Link to="/Courses-Page" className="text-[#3B82F6] font-semibold">
          See All
        </Link>
      </div>
      <div className="flex justify-between mt-4">
        <CoursesCard /> <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
    </div>
  );
};

export default HomeCourses;
