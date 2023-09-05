import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentCourseAccess from "./StudentCourseAccess";
import StudentPageHeader from "./StudentPageHeader";

const StudentPage = () => {
    return (
        <div>
            <StudentPageHeader />
            <Routes>
                <Route path={"course"} element={<StudentCourseAccess />} />
            </Routes>
        </div>
    );
};

export default StudentPage;
