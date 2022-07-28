import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    About
                </li>
                <li>
                <Link to="/ballot">Vote!</Link>
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