import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Ellipse53 from "/Ellipse 53.png";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import CoursesCard from "../components/ReUseable/CoursesCard";
import LearnerReview from "../components/LearnerReview";

const TeachOnByway = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <div>
          <div>
            <small>Instructor</small>
            <h2>JOHN DOE</h2>
            <span>Web developer, UX/UI Designer, and Teacher</span>
            <div>
              <div>
                <p>Total Students</p>
                <p>1000</p>
              </div>
              <div>
                <p>Reviews</p>
                <p>154</p>{" "}
              </div>
            </div>
            <h3>About Ronald Richard</h3>
            <p>
              Ronald Richard is a highly skilled UX/UI Designer with over a
              decade of experience in crafting user-centric digital solutions.
              With a background in graphic design and a keen eye for detail,
              Ronald specializes in creating intuitive interfaces that delight
              users and drive business results.
            </p>
            <h3>Areas of Expertise</h3>
            <ul>
              <li>
                User Experience (UX) Design
                <li>User Interface (UI) Design</li>
                <li>Information Architecture</li>
                <li>Interaction Design</li>
                <li>Visual Design</li> <li>Usability Testing</li>{" "}
                <li>Wireframing and Prototyping</li> <li>Design Thinking</li>
              </li>
            </ul>
            <h3>Professional Experience</h3>
            <p>
              Ronald Richard has an extensive professional background in UX/UI
              design, having worked with renowned companies such as [Company
              Name] and [Company Name]. His portfolio includes a diverse range
              of projects spanning web applications, mobile apps, and e-commerce
              platforms.
            </p>
          </div>
          <div>
            <img src={Ellipse53} alt="" />
            <button>Website</button>
            <button>Youtube</button>
            <button>Twitter</button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h3>More Courses By</h3>
              <h3>John Doe</h3>
            </div>
            <div className="flex text-[20px] font-semibold gap-8 ">
              <button>
                <ChevronLeft className="bg-[#94A3B8] text-white rounded-md w-8" />
              </button>
              <button>
                <ChevronRight className="bg-[#94A3B8] text-white rounded-md w-8" />
              </button>
            </div>
          </div>
          <div>
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </div>
        </div>
        <LearnerReview />
      </main>
      <Footer />
    </div>
  );
};

export default TeachOnByway;
