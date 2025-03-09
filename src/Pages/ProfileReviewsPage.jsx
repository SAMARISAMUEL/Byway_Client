import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const ProfileReviewsPage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
};

export default ProfileReviewsPage;
