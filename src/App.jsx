import React from "react";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoriesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeachOnByway from "./Pages/TeachOnByway";
import LoginPage from "./Pages/LoginPage";
import SignupStudentPage from "./Pages/SignupStudentPage";
import SignupTeacherPage from "./Pages/SignupTeacherPage";
import CoursesPage from "./Pages/CoursesPage";
import InstructorsPage from "./Pages/InstructorsPage";
import ShoppingCart from "./Pages/ShoppingCart";
import ProfilePage from "./Pages/ProfilePage";
import ProfileNotification from "./Pages/ProfileNotification";
import ProfileMyCourses from "./Pages/ProfileMyCouresePage";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderCompletePage from "./Pages/OrderCompletePage";
import ProfileTeachersPage from "./Pages/ProfileTeachersPage";
import ProfileReviewsPage from "./Pages/ProfileReviewsPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Category-Page" element={<CategoryPage />} />
          <Route path="/Courses-Page" element={<CoursesPage />} />
          <Route path="/CheckOut-Page" element={<CheckOutPage />} />
          <Route path="/Instructors-Page" element={<InstructorsPage />} />
          <Route path="/ShoppingCart-Page" element={<ShoppingCart />} />
          <Route path="/TeachOnByway-Page" element={<TeachOnByway />} />

          <Route path="/Login-Page" element={<LoginPage />} />
          <Route path="/OrderComplete-Page" element={<OrderCompletePage />} />
          <Route path="/SignupStudent-Page" element={<SignupStudentPage />} />
          <Route path="/SignupTeacher-Page" element={<SignupTeacherPage />} />
          <Route path="/ProfileReviews-Page" element={<ProfileReviewsPage />} />
          <Route
            path="/ProfileTeachers-Page"
            element={<ProfileTeachersPage />}
          />
          <Route
            path="/ProfileNotification-Page"
            element={<ProfileNotification />}
          />
          <Route path="/Profile-Page" element={<ProfilePage />}></Route>
          <Route path="/ProfileMyCourses-Page" element={<ProfileMyCourses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
