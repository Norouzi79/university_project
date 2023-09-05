import React, { useState } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const AdminPageHeader = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link to="/admin" className="item">
                    Home
                </Link>

                <Link to="courseControl" className="item">
                    Courses
                </Link>

                <Link to={"/teacher"} className="item">
                    Teachers
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

export default AdminPageHeader;
