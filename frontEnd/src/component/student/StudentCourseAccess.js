import React, { useState, useEffect } from "react";
import CourseApi from "../../api/AdminApi";

const StudentCourseAccess = () => {
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

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>If you have taken this course or not?</th>
                        <th>teacher</th>
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
                                <button className={"ui button"}>take</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentCourseAccess;
