import React, { useEffect, useState } from "react";
import TeacherList from "./TeacherList";
import AdminApi from "../../api/AdminApi";
import AdminPageHeader from "./AdminPageHeader";

const AdminPageTeacherControl = () => {
    useEffect(() => {
        onClickFetchTeacherList();
    });

    const [teacherId, setTeacherId] = useState("");
    const [teacher, setTeacher] = useState([]);
    const onClickFetchTeacherList = () => {
        console.log("ee");
        AdminApi.get("/listAllTeacher", {}).then((resp) =>
            setTeacher(resp.data)
        );
    };

    return (
        <div>
            <AdminPageHeader />
            <TeacherList teacherList={teacher} />
        </div>
    );
};
export default AdminPageTeacherControl;
