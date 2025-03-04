import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import HomeStat from "../components/HomeStat";
import HomeCategories from "../components/HomeCategories";
import HomeCourses from "../components/HomeCourses";
import HomeInstructor from "../components/HomeInstructor";
import HomeTestimonial from "../components/HomeTestimonial";
import HomeCta from "../components/HomeCta";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <nav className="fixed bg-white px-20 ms-14">
        <Navbar />
      </nav>
      <HomeHero />
      <HomeStat />
      <HomeCategories />
      <HomeCourses />
      <HomeInstructor />
      <HomeTestimonial />
      <HomeCta />
      <Footer />
    </div>
  );
};

export default HomePage;
