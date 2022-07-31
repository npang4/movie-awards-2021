import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar navbar-dark bg-primary" id="nav">
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
                <div className="search-bar">
                    <input className="search-function" type="text" placeholder="Search..." />
                </div>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                    Registration
                </li>

            </ul>
        </div>
    )
}


export default Navbar;