import React from "react";
import CourseImage from "/cardImage.jpeg";
import star from "/Star.png";

const CoursesCard = () => {
  return (
    <div className="border border-[#E2E8F0] w-56 rounded-xl ">
      <div className="ms-[18px] mt-2">
        <img src={CourseImage} alt="courses image" className="w-[186px]" />
      </div>
      <h3 className="mt-1 ms-3 font-bold text-[15px]">
        Beginner’s Guide to Design
      </h3>
      <p className="text-[13px] mt-1 ms-3">By Ronald Richards</p>
      <div className="flex">
        <img src={star} alt="Star rating" />
        <span>(1200 Ratings)</span>
      </div>
      <p className="text-[12px] mt-1 ms-3">
        22 Total Hours. 155 Lectures. Beginner
      </p>
      <h3 className="text-[18px] font-bold mt-1 ms-3">$149.9</h3>
    </div>
  );
};

export default CoursesCard;
