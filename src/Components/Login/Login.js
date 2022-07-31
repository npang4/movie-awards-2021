import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <label className="user-label">Username</label>
                <input className="user-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label className="user-label">Password</label>
                <input className="user-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="login-btn-div">
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;
