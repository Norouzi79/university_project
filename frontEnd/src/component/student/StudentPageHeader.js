import React from "react";
import { Link } from "react-router-dom";

const StudentPageHeader = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link to="/teacher" className="item">
                    Home
                </Link>

                <Link to="/course" className="item">
                    myCourses
                </Link>

                <Link to="/course" className="item">
                    Courses
                </Link>

                <div className="right menu">
                    <Link to="/logout" className="ui item active logout-btn">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default StudentPageHeader;
