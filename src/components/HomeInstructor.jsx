import React from "react";
import InstructorsCard from "../components/ReUseable/InstructorsCard";
import { Link } from "react-router";

const InstructorsPage = () => {
  return (
    <div className="mt-6 px-28">
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">Top Instructors</h2>
        <Link to="/Instructors-Page" className="text-[#3B82F6] font-semibold">
          See All
        </Link>
      </div>
      <div className="flex justify-between mt-4">
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
      </div>
    </div>
  );
};

export default InstructorsPage;
