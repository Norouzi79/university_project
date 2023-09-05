import React, { useState } from "react";
import TeacherPageHeader from "./TeacherPageHeader";
import TeacherSignUp from "./TeacherSignUp";
import CourseApi from "../../api/AdminApi";
import { Route, Routes } from "react-router-dom";
import TeacherCourseAccess from "./TeacherCourseAccess";
import TeacherHome from "./TeacherHome";

const TeacherPage = () => {
    return (
        <div>
            <Routes>
                <Route path="signUp" element={<TeacherSignUp />} />
                <Route path="course" element={<TeacherCourseAccess />} />
            </Routes>
        </div>
    );
};

export default TeacherPage;
