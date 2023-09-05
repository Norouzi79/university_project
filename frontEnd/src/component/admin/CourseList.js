import React, { useState } from "react";
import AdminApi from "../../api/AdminApi";

const CourseList = ({ courseList }) => {
    const [course, setCourse] = useState({});
    const courseIdOnChange = (e) => {
        setCourse(e.target.value);
    };

    const [diffInputState, setDiffInputState] = useState(false);
    const [trueFalseDecider, setTrueFalseDecider] = useState(false);

    const [checkNumber, setCheckNumber] = useState(-1);

    const [courseId, setCourseId] = useState(-1);

    function changeTrueFalse(comingCourse) {
        if (!trueFalseDecider) {
            //means we want to edit it. so pass it to courseId
            setCourse(comingCourse);
            setCheckNumber(comingCourse.courseId);
        } else {
            console.log("you are confirming...");
            console.log("confirming, ", course);
            AdminApi.get("updateCourse", {
                params: {
                    courseId: comingCourse.courseId,
                    courseName: course,
                },
                headers: {
                    teacherItem: comingCourse.teacherList,
                },
            }).catch((resp) => console.log(resp));
        }

        setTrueFalseDecider(!trueFalseDecider);
    }

    function deletingCourseFunc(id) {
        AdminApi.get("/deleteCourse", {
            params: {
                courseId: id,
            },
        }).catch((resp) => console.log(resp));
    }

    const [reload, setReload] = useState({ reload: false });

    return (
        <div>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Teachers</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {/*iteration row for all*/}

                {courseList.map((anyCourse) => (
                    <tr key={anyCourse.courseId}>
                        <td data-label="Course Id">{anyCourse.courseId}</td>
                        <td data-label="Course Name">
                            {" "}
                            {trueFalseDecider &&
                            checkNumber === anyCourse.courseId ? (
                                <div className={"ui input"}>
                                    <input
                                        className={"ui input"}
                                        value={course.courseName}
                                        onChange={courseIdOnChange}
                                    />
                                </div>
                            ) : (
                                <div>{anyCourse.courseName}</div>
                            )}{" "}
                        </td>
                        <td data-label="Teachers">
                            {" "}
                            {anyCourse.teacherList.map((each) => (
                                <div>{each.teacherName}</div>
                            ))}{" "}
                        </td>

                        <td data-label="ACTION">
                            {" "}
                            <button
                                onClick={() => {
                                    changeTrueFalse(anyCourse);
                                }}
                                className={"ui button"}
                            >
                                {trueFalseDecider &&
                                checkNumber === anyCourse.courseId
                                    ? "Confirm"
                                    : "Edit"}
                            </button>{" "}
                        </td>
                        <td data-label="ACTION">
                            <button
                                onClick={() => {
                                    deletingCourseFunc(anyCourse.courseId);
                                }}
                                className={"ui button"}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {/* <tr>
                        <td data-label="Course Id">10</td>
                        <td data-label="Course Name">
                            {true ? (
                                <div className={"ui input"}>
                                    <input
                                        className={"ui input"}
                                        value={course.courseName}
                                        onChange={courseIdOnChange}
                                    />
                                </div>
                            ) : (
                                <div>js course</div>
                            )}
                        </td>
                        <td data-label="Teachers">ali hasani</td>

                        <td data-label="ACTION">
                            {" "}
                            <button className={"ui button form-edit-btn"}>
                                Edit
                            </button>{" "}
                        </td>

                        <td data-label="ACTION">
                            <button className={"ui button form-delete-btn"}>
                                Delete
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};
export default CourseList;
