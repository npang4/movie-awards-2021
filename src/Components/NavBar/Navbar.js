import React from "react";
import "./navbar.css";
const Navbar = () => {

    return (
        <div className="nav">
            <ul>
                <li>
                    Company Home Page
                </li>
                <li>
                    About
                </li>
                <li>
                    News
                </li>
                <li>
                    Login
                </li>
                <li>
                    Registration
                </li>
                <div className="search-bar">
                    <input className="search-function" type="text" placeholder="Search..."/>
                </div>
            </ul>
        </div>
    )
}


export default Navbar;