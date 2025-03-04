import React from "react";
import image from "/image 10.png";
import ManCta from "/Group 143.png";
import { Link } from "react-router";
import Button from "./ReUseable/Button";
import { ArrowRight } from "lucide-react";

const HomeCta = () => {
  return (
    <div>
      <div className="flex mt-10 px-20 gap-52">
        <img src={image} alt="Woman image " className="w-[20%] ms-10" />
        <div className="w-[43%] mt-20">
          <h3 className="font-bold mb-2 text-2xl">Become an Instructor</h3>
          <p>
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <Link to="/SignupTeacher-Page">
            <Button
              btnText="Start Your Instructor Journey"
              btnStyle="border border-black p-2 mt-2 rounded bg-black w-[50%] text-white"
            />
            <div className="relative bottom-8 left-[43%] text-white">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex mt-10 px-20 ">
        <div className="w-[40%] mt-20 ms-10">
          <h3 className="font-bold mb-2 text-2xl">
            Transform your life through education
          </h3>
          <p>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <Link to="/Courses-Page">
            <Button
              btnText="Checkout Courses"
              btnStyle="border border-black p-2 mt-2 rounded bg-black w-[50%] text-white"
            />
            <div className="relative bottom-8 left-[43%] text-white">
              <ArrowRight />
            </div>
          </Link>
        </div>
        <img src={ManCta} alt="Man image " className="w-[30%] ms-10" />
      </div>
    </div>
  );
};

export default HomeCta;
