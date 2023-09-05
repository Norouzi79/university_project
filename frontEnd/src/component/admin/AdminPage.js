import React, { useState } from "react";
import AdminPageHeader from "./AdminPageHeader";
import AdminPageCourseControl from "./AdminPageCourseControl";
import AdminPageTeacherControl from "./AdminPageTeacherControl";
import {
    BrowserRouter as Router,
    useRouteMatch,
    Route,
    Routes,
} from "react-router-dom";
import AdminHomePage from "./AdminHomePage";

const AdminPage = () => {
    return (
        <div>
            <Routes>
                <Route
                    path={"courseControl"}
                    element={<AdminPageCourseControl />}
                />
                <Route
                    path={"teacherControl"}
                    element={<AdminPageTeacherControl />}
                />
            </Routes>
        </div>
    );
};

export default AdminPage;
