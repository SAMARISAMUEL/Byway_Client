import React from "react";
import TestimonialCard from "./ReUseable/TestimonialCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const HomeTestimonial = () => {
  return (
    <div className="mt-12 px-28 bg-[#F8FAFC] py-16">
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">
          What Our Students Say About Us
        </h2>
        <div className="flex text-[20px] font-semibold gap-8 ">
          <button>
            <ChevronLeft className="bg-[#94A3B8] text-white rounded-md w-8" />
          </button>
          <button>
            <ChevronRight className="bg-[#94A3B8] text-white rounded-md w-8" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <TestimonialCard /> <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default HomeTestimonial;
