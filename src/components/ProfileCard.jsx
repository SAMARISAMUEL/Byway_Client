import React from "react";
import Ellipse53 from "/Ellipse 53.png";
import { Share2 } from "lucide-react";
import { Link } from "react-router";

const ProfileCard = () => {
  return (
    <div>
      <img src={Ellipse53} alt="" />
      <h2>John Doe</h2>
      <div>
        <p>Share Profile </p>
        <Share2 className="text-[18px] ml-2" />
      </div>
      <Link to="/Profile-Page">Profile</Link>
      <Link to="/ProfileMyCourses-Page">My Courses</Link>
      <Link to="/ProfileTeachers-Page">Teachers</Link>
      <Link to="/ProfileNotification-Page">Messages</Link>
      <Link to="/ProfileReviews-Page">My Reviews</Link>
    </div>
  );
};

export default ProfileCard;
