import React, { useEffect, useState } from "react";
import CourseApi from "../../api/AdminApi";
import TeacherPageHeader from "./TeacherPageHeader";
import "./TeacherCourseAccess";

const TeacherCourseAccess = () => {
     useEffect(() => {
         onClickFunc();
     }, []);

    const [course, setCourse] = useState([]);

    const onClickFunc = () => {
        CourseApi.get("/listAllCourse").then((resp) => {
            console.log(resp.data);
            setCourse(resp.data);
        });
    };
    const actionOnClick = (e) => {
        CourseApi.get(
            "http://localhost:8081/teacher/takeCourse?courseId=1&teacherId=1",
            {
                params: {
                    teacherId: 1,
                    courseId: e,
                },
            }
        );
    };

    return (
        <div>
            <TeacherPageHeader />

            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>If you have taken this course or not?</th>
                        <th>List of teacher's who have taken the course</th>
                        <th>Take or Drop</th>
                    </tr>
                </thead>
                <tbody>
                     {course.map((anyCourse) => (
                        <tr key={anyCourse.courseId}>
                            <td data-label="Course Id">{anyCourse.courseId}</td>
                            <td data-label="Course Id">
                                <div>{anyCourse.courseName}</div>
                            </td>

                            <td data-label="If you have taken this course or not?">
                                {}
                            </td>

                            <td>
                                {anyCourse.teacherList.map((teacherItem) => (
                                    <tr>{teacherItem.teacherName}</tr>
                                ))}
                            </td>
                            <td data-label="Take or Drop">
                                <button
                                    onClick={() =>
                                        actionOnClick(anyCourse.courseId)
                                    }
                                    className={"ui button"}
                                >
                                    Action
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td data-label="Course Id">10</td>
                        <td data-label="Course Id">
                            <div>course 1</div>
                        </td>

                        <td data-label="If you have taken this course or not?"></td>

                        <td>hello</td>
                        <td data-label="Take or Drop">
                            <button className={"ui button"}>Action</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default TeacherCourseAccess;
