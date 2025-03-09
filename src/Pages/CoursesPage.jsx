import React from "react";
import MainNavBar from "../components/MainNavBar";
import {
  ListFilter,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Globe,
  Medal,
  GraduationCap,
  Play,
} from "lucide-react";
import star from "/Star.png";
import Ellipse4 from "/Ellipse 4.png";
import Footer from "../components/Footer";
import MentorsCard from "../components/ReUseable/MentorsCard";

import HomeTestimonial from "../components/HomeTestimonial";
import CoursesCard from "../components/ReUseable/CoursesCard";
import LearnerReview from "../components/LearnerReview";
const CoursesPage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <div className="flex">
          <div>
            <div className="flex">
              <span>Home</span>
              <ChevronRight />
              <span>Categories</span>
              <ChevronRight />
              <span>Introduction to User Experience Design</span>
            </div>
            <div>
              <h1>Introduction to User Experience Design</h1>
              <p>
                This course is meticulously crafted to provide you with a
                foundational understanding of the principles, methodologies, and
                tools that drive exceptional user experiences in the digital
                landscape.
              </p>
              <div>
                <div className="">
                  <img src={star} alt="Star rating" />
                  <span>(1200 Ratings)</span>
                </div>
                <p className="text-[12px] mt-1 ms-3">
                  22 Total Hours. 155 Lectures. Beginner
                </p>
                <img src={Ellipse4} alt="" />
                <p>Created By</p>
                <span>John Doe</span>
                <Globe />
                <p>English, Spanish, Italian, German</p>
              </div>
            </div>
            <div>
              <button>Description</button>
              <button>Instructor</button>
              <button>Syllabus</button>
              <button>Reviews</button>
            </div>
            <h3>Course Description</h3>
            <p>
              This interactive e-learning course will introduce you to User
              Experience (UX) design, the art of creating products and services
              that are intuitive, enjoyable, and user-friendly. Gain a solid
              foundation in UX principles and learn to apply them in real-world
              scenarios through engaging modules and interactive exercises.{" "}
            </p>
            <h3>Certification</h3>
            <p>
              At Byway, we understand the significance of formal recognition for
              your hard work and dedication to continuous learning. Upon
              successful completion of our courses, you will earn a prestigious
              certification that not only validates your expertise but also
              opens doors to new opportunities in your chosen field.
            </p>
            <h3>Instructor</h3>
            <h2>Ronald Richards</h2>
            <span>UI/UX Designer</span>
          </div>
          <div>
            <img src={Ellipse4} alt="" />
            <div>
              <Medal />
              <p>40,445 Reviews</p>
            </div>
            <div>
              <GraduationCap />
              <p>500 Students</p>
            </div>
            <div>
              <Play />
              <p>12 courses</p>
            </div>
          </div>
          <p>
            With over a decade of industry experience, Ronald brings a wealth of
            practical knowledge to the classroom. He has played a pivotal role
            in designing user-centric interfaces for renowned tech companies,
            ensuring seamless and engaging user experiences.
          </p>
          <h3>Syllabus</h3>
          <div>
            <ChevronDown />
            <h4>Introduction to UX Design</h4>
            <div>
              <p>5 Lessons</p>
              <p>1 Hour</p>
            </div>
          </div>
          <div>
            <ChevronDown />
            <h4>Basics of User-Centered Design</h4>
            <div>
              <p>5 Lessons</p>
              <p>1 Hour</p>
            </div>
          </div>
          <div>
            <ChevronDown />
            <h4>Elements of User Experience</h4>
            <div>
              <p>5 Lessons</p>
              <p>1 Hour</p>
            </div>
          </div>
          <div>
            <ChevronDown />
            <h4>Visual Design Principles</h4>
            <div>
              <p>5 Lessons</p>
              <p>1 Hour</p>
            </div>
          </div>
          <MentorsCard />
        </div>
        <div>
          <LearnerReview />
          <HomeTestimonial />
          <div>
            <h3>More Courses Like This</h3>

            <div className="flex justify-between mt-4">
              <CoursesCard /> <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
