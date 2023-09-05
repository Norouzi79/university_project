import React, { useEffect, useState } from "react";
import AdminPageHeader from "./AdminPageHeader";
import CourseList from "./CourseList";
import AdminApi from "../../api/AdminApi";
import "./AdminPageCourseControl.css";

const AdminPageCourseControl = () => {
     useEffect(() => {
         onClickFunc();
     });

    const [course, setCourse] = useState([]);

    const onClickFunc = () => {
        AdminApi.get("/listAllCourse").then((resp) => {
            setCourse(resp.data);
        });
    };

    const [teacher, setTeacher] = useState([]);
    const onClickFetchTeacherList = () => {
        AdminApi.get("/listAllTeacher", {}).then((resp) =>
            setTeacher(resp.data)
        );
    };

    const [courseName, setCourseName] = useState("");

    const courseNameValue = (e) => {
        setCourseName(e.target.value);
    };

    const newCourseFormControl = (e) => {
        e.preventDefault();

        AdminApi.get("/insertCourse", {
            params: {
                courseName: courseName,
            },
        });

        setCourseName("");
    };

    return (
        <div>
            <AdminPageHeader />
            <form className={"ui form"} onSubmit={newCourseFormControl}>
                <input
                    type="text"
                    value={courseName}
                    placeholder={"Enter Course Name"}
                    onChange={courseNameValue}
                    className="enter-co-n"
                />
                <button type={"submit"} className={"ui button"}>
                    Add this course
                </button>
            </form>

            <br />

            <CourseList courseList={course} />
        </div>
    );
};
export default AdminPageCourseControl;
