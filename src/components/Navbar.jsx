import React from "react";
import Logo from "/logo.svg";
import { Link } from "react-router";
import { Search } from "lucide-react";
import Button from "./ReUseable/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-around px-8 py-5 border border-b-1 h-16 ">
      <div className="flex">
        <Link to="/">
          <img src={Logo} alt="Byway Logo " className="w-6" />
        </Link>
        <h3>Byway</h3>
        <Link to="/Category-Page" className="ms-10">
          Categories
        </Link>
        <form className="ms-10">
          <input
            type="text"
            placeholder="Search Courses"
            className="w-[600px] h-8 rounded-md border border-black "
          />
          <Search className="w-[8%] relative bottom-7 left-[550px]" />
        </form>
        <Link to="/TeachOnByway-Page" className="ms-8">
          Teach On Byway
        </Link>
        <div className="flex ms-8 gap-4 ">
          <Link to="/Login-Page">
            <Button
              btnText="Login"
              btnStyle="border border-black p-1 rounded "
            />
          </Link>
          <Link>
            <Button
              btnText="Sign Up"
              btnStyle="border border-black p-1 rounded bg-[#334155] text-white"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
