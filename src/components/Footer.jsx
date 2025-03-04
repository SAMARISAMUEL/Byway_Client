import React from "react";
import { Link } from "react-router";
import Logo from "/logo.svg";
import github from "/public/github.png";
import microsoft from "/public/Microsoft.png";
import facebook from "/public/facebook.png";
import google from "/public/Google.png";
import twitter from "/twitter.png";
const Footer = () => {
  return (
    <div className="bg-[#1E293B] text-white flex gap-12 px-28 py-14 mt-8 ">
      <div className="w-[40%]">
        <div className="flex">
          <Link to="/">
            <img src={Logo} alt="Byway Logo " className="w-6" />
          </Link>
          <h3>Byway</h3>
        </div>
        <p>
          Empowering learners through accessible and engaging online education.{" "}
          <br />
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.{" "}
        </p>
      </div>
      <div className="flex gap-8">
        <div className="">
          <h3>Get Help</h3>
          <div>
            <Link>Contact Us</Link>
          </div>
          <div>
            {" "}
            <Link>FAQ</Link>
          </div>{" "}
        </div>
        <div>
          <h3>Programs</h3>
          <ul>
            <li>Art & Design</li>
            <li>Business</li>
            <li>IT & Software</li>
            <li>Languages</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <span>Contact Us</span>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <p>Tel: +(123) 456-7890</p>
          <p>Mail: bywayedu@webkul.in</p>
          <div className="flex justify-start gap-2 mt-2">
            <img src={facebook} alt="facebook logo" className="w-6" />
            <img src={google} alt="google logo" className="w-6" />
            <img src={microsoft} alt="microsoft logo" className="w-6" />
            <img src={github} alt="github logo" className="w-6" />
            <img src={twitter} alt="" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
