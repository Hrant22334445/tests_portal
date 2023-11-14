import React from "react";
import "./LogIn.scss";
import SignIn from "../SignIn";

const LogIn: React.FC = () => {

    return (
        <div>
            <div className="all">
            <h2>Log in to continue</h2>
            <input className="input" type="text" placeholder="Username" />
            <input className="input" type="text" placeholder="Enter your email" />
            <br />
            <button className="continue">Continue</button>
            <SignIn />
            </div>
        </div>
    )
}

export default LogIn;