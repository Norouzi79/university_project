import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import AdminPage from "./component/admin/AdminPage";
import TeacherPage from "./component/teacher/TeacherPage";
import StudentPage from "./component/student/StudentPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import TeacherHome from "./component/teacher/TeacherHome";
import AdminHomePage from "./component/admin/AdminHomePage";

const App = () => {
    return (
        <div className="ui container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teacher/*" element={<TeacherPage />} />
                <Route path="/teacher" element={<TeacherHome />} />
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/admin" element={<AdminHomePage />} />
                <Route path="/student/*" element={<StudentPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
};
export default App;
