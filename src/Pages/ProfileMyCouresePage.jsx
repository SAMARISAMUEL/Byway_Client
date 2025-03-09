import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const ProfileMyCouresePage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <ProfileCard />
        <div></div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileMyCouresePage;
