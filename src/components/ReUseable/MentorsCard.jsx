import React from "react";
import MentorsImage from "/image 4.png";
import github from "/public/github.png";
import microsoft from "/public/Microsoft.png";
import facebook from "/public/facebook.png";
import google from "/public/Google.png";
import twitter from "/twitter.png";
const MentorsCard = () => {
  return (
    <div className="border border-[#E2E8F0] w-[13%] p-3 rounded-md ">
      <img src={MentorsImage} alt="" className="w-40 m-auto " />
      <div className="flex mt-3">
        <p>$49.5</p>
        <p>$99.5</p>
        <p>50% Off</p>
      </div>
      <button className="mt-3">Add To Cart</button>
      <br />
      <button className="mt-2">Buy Now</button>
      <div className="border border-t-[#E2E8F0]">
        <h3>Share</h3>
        <div className="flex justify-start gap-2 mt-2">
          <img src={facebook} alt="facebook logo" className="w-6" />
          <img src={google} alt="google logo" className="w-6" />
          <img src={microsoft} alt="microsoft logo" className="w-6" />
          <img src={github} alt="github logo" className="w-6" />
          <img src={twitter} alt="" className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default MentorsCard;
