import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import HomeStat from "../components/HomeStat";
import HomeCategories from "../components/HomeCategories";
import HomeCourses from "../components/HomeCourses";
import HomeInstructor from "../components/HomeInstructor";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeStat />
      <HomeCategories />
      <HomeCourses />
      <HomeInstructor />
    </div>
  );
};

export default HomePage;
