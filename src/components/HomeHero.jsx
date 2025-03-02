import React from "react";
import { Link } from "react-router";
import Button from "./ReUseable/Button";
import HeroImage from "/public/Group 469349.png";

const HomeHero = () => {
  return (
    <div className="flex py-12 px-28 gap-10">
      <div className="mt-36">
        <h1 className="text-5xl font-bold mb-4 w-[80%]">
          Unlock Your Potential with Byway
        </h1>
        <p className="text-[#334155] w-[80%] mb-4">
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success.{" "}
        </p>
        <Link to="/SignupTeacher-Page">
          <Button
            btnText="Start your instructor journey"
            btnStyle="p-1 rounded bg-[#3B82F6] text-white w-[250px] text-white "
          />
        </Link>
      </div>
      <div>
        <img src={HeroImage} alt="HeroImage " className="w-[1000px]" />
      </div>
    </div>
  );
};

export default HomeHero;
