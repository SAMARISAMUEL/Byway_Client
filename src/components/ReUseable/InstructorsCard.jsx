import React from "react";
import MentorsImage from "/public/MentorsCard.png";
import star from "/Star.png";

const InstructorsCard = () => {
  return (
    <div className="border border-[#E2E8F0] w-44 rounded-xl ">
      <img
        src={MentorsImage}
        alt="Mentors Image"
        className="w-[150px] m-auto mt-2"
      />
      <h3 className="w-32 m-auto text-[15px] font-semibold">Ronald Richards</h3>
      <span className="text-[13px] w-32 ms-7 ">UI/UX Designer</span>
      <div className="flex border border-t-black">
        <img src={star} alt="" />
        <span>4.9</span>
        <p>2400 Students</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
