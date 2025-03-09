import React from "react";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Bell } from "lucide-react";
import profileavatar from "/profileavatar.png";

const MainNavBar = () => {
  return (
    <div>
      <nav className="flex justify-around  py-5  h-16 ">
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
          <Heart className="ms-14" />
          <Link to="/ShoppingCart-Page">
            <ShoppingCart className="ms-4" />
          </Link>
          <Link to="/ProfileNotification-Page">
            <Bell className="ms-4" />
          </Link>
          <Link to="/Profile-Page">
            <div className="ms-4 w-6">
              <img src={profileavatar} alt="" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainNavBar;
