import React, { useState } from "react";
import "./auth.css";
import image from "../images/Social-tree.jpg";
import Signin from "./Signin";
import Signup from "./Signup";
const Authenticate = () => {
    const [change, setchange] = useState(false);
    return (
        <section className="section">
            <div className="images">
                <img src={image} alt="" />
            </div>
            {change ? (
                <Signup change={setchange} />
            ) : (
                <Signin change={setchange} />
            )}
        </section>
    );
};

export default Authenticate;
