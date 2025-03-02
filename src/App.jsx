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
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Category-Page" element={<CategoryPage />} />
          <Route path="/Courses-Page" element={<CoursesPage />} />
          <Route path="/Instructors-Page" element={<InstructorsPage />} />

          <Route path="/TeachOnByway-Page" element={<TeachOnByway />} />
          <Route path="/Login-Page" element={<LoginPage />} />
          <Route path="/SignupStudent-Page" element={<SignupStudentPage />} />
          <Route path="/SignupTeacher-Page" element={<SignupTeacherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
