import React from "react";
import vector from "/Vector.png";
import oval from "/public/Ellipse 61.png";
const TestimonialCard = () => {
  return (
    <div className="w-[28%] border border-[#E2E8F0] p-4 rounded-lg">
      <img src={vector} alt="quote" className="w-6" />
      <p className="text-[12px] mt-2">
        "Byway's tech courses are top-notch! As someone who's always looking to
        stay ahead in the rapidly evolving tech world, I appreciate the
        up-to-date content and engaging multimedia.
      </p>
      <div className="flex gap-2 mt-2">
        <img src={oval} alt="oval" />
        <div>
          <h3>Jane Doe</h3>
          <span className="text-[10px]">Student, UI/UX Designer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
