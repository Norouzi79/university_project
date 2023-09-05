import React, { useState } from "react";
import TeacherApi from "../../api/TeacherApi";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TeacherPageHeader from "./TeacherPageHeader";
import "./TeacherSignUp.css";

const TeacherSignUp = () => {
    const [teacherId, setTeacherId] = useState("");
    const [teacher, setTeacher] = useState([]);

    const [teacherName, setTeacherName] = useState("");
    const [teacherLastName, setTeacherLastName] = useState("");

    const [teacherUsername, setTeacherUsername] = useState("");
    const teacherUsernameValue = (e) => {
        setTeacherUsername(e.target.value);
    };
    const [teacherPassword, setTeacherPassword] = useState("");
    const teacherPasswordValue = (e) => {
        setTeacherPassword(e.target.value);
    };

    const teacherIdValue = (e) => {
        setTeacherId(e.target.value);
    };
    const teacherNameValue = (e) => {
        setTeacherName(e.target.value);
    };
    const teacherLastNameValue = (e) => {
        setTeacherLastName(e.target.value);
    };

    const newTeacherFormControl = (e) => {
        e.preventDefault();

        console.log(
            "entering... : " + teacherId + teacherName + teacherLastName
        );

        TeacherApi.get("/signUp", {
            params: {
                teacherId: teacherId,
                teacherName: teacherName,
                teacherFamily: teacherLastName,
            },
        });

        setTeacherId("");
        setTeacherName("");
        setTeacherLastName("");
        window.location.replace("http://localhost:3000/teacher/");
    };

    return (
        <div>
            <TeacherPageHeader />
            <form
                className={"ui sign-up-form"}
                onSubmit={newTeacherFormControl}
            >
                <input
                    type="text"
                    value={teacherUsername}
                    placeholder={"Enter Username"}
                    onChange={teacherUsernameValue}
                />
                <input
                    type="password"
                    value={teacherPassword}
                    placeholder={"Enter Password"}
                    onChange={teacherPasswordValue}
                />

                <input
                    type="number"
                    value={teacherId}
                    placeholder={"Enter Id Number"}
                    onChange={teacherIdValue}
                />
                <input
                    type="text"
                    value={teacherName}
                    placeholder={"Enter Name"}
                    onChange={teacherNameValue}
                />
                <input
                    type="text"
                    value={teacherLastName}
                    placeholder={"Enter LastName"}
                    onChange={teacherLastNameValue}
                />

                <Link to={"/teacher/course"}>
                    <button
                        onClick={newTeacherFormControl}
                        type={"submit"}
                        className={"ui button"}
                    >
                        Add this Teacher
                    </button>
                </Link>
            </form>
        </div>
    );
};
export default TeacherSignUp;
