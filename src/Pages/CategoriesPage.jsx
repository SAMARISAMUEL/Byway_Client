import React from "react";
import MainNavBar from "../components/MainNavBar";
import {
  ListFilter,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Footer from "../components/Footer";

import starIcon from "/Star.png";
import CoursesCard from "../components/ReUseable/CoursesCard";
import InstuctorsCard from "../components/ReUseable/InstructorsCard";
const CategoriesPage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <h2>Design Courses</h2>
        <h3>All Development Courses</h3>
        <div className="flex">
          <button className="flex">
            <ListFilter />
            <span>Filter</span>
          </button>
          <p>Sort By</p>
          <button className="flex">
            Reference <ChevronDown />
          </button>
        </div>
        <div className="flex">
          <div>
            <p className="flex">
              Rating <ChevronUp />
            </p>
            <div>
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
            </div>
            <div>
              <p>Number of Chapters </p>
              <div>
                <input type="checkbox" name="" id="" />
                <p>1-10</p>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <p>10-15</p>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <p>15-20</p>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <p>20-25</p>
              </div>

              <p className="flex">
                see more <ChevronDown />{" "}
              </p>
              <div className="flex">
                <p>Price </p>
                <ChevronUp />
              </div>
              <div className="flex">
                <p>Category </p>
                <ChevronUp />
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <CoursesCard /> <CoursesCard />
              <CoursesCard />
            </div>
            <div>
              <CoursesCard /> <CoursesCard />
              <CoursesCard />
            </div>
            <div>
              <CoursesCard /> <CoursesCard />
              <CoursesCard />
            </div>
          </div>
        </div>
        <div className="flex">
          <ChevronLeft />
          <button>1</button> <button>2</button> <button>3</button>{" "}
          <button>4</button>
          <ChevronRight />
        </div>
        <div>
          <h3>Popular Mentors</h3>
          <div className="flex bg-[#F8FAFC]">
            <InstuctorsCard /> <InstuctorsCard />
            <InstuctorsCard /> <InstuctorsCard />
            <InstuctorsCard />
          </div>
        </div>
        <div>
          <h3>Featured Courses</h3>
          <div className="flex">
            <CoursesCard /> <CoursesCard />
            <CoursesCard /> <CoursesCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
