import React from "react";
import { Link } from "react-router";
import Button from "./ReUsable/Button";

const HomeHero = () => {
  return (
    <div>
      <h1>Unlock Your Potential with Byway</h1>
      <p>
        Welcome to Byway, where learning knows no bounds. We believe that
        education is the key to personal and professional growth, and we're here
        to guide you on your journey to success.{" "}
      </p>
      <Link to="/SignupTeacher-Page">
        <Button
          btnText="Start your instructor journey"
          btnStyle="border border-black p-1 rounded bg-[#3B82F6] text-white"
        />
      </Link>
    </div>
  );
};

export default HomeHero;
