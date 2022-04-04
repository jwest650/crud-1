import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGoogleSquare } from "react-icons/ai";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Signin = ({ change }) => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState({
        email: "",
        password: "",
    });

    function google() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({ type: "login", payload: result.user });
                setuserInfo({ email: "", password: "" });
                console.log(result.user);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function signin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((Credential) => {
                const user = Credential.user;
                setuserInfo({ email: "", password: "" });

                console.log(user);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleInput = (e) => {
        setuserInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <form action="" onSubmit={signin}>
            <h1>Sign In</h1>
            <div>
                <input
                    type="text"
                    name="email"
                    placeholder="Your name"
                    value={userInfo.email}
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={handleInput}
                />
            </div>
            <div>
                <input type="checkbox" />
                <span className="check">remember me</span>
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
            <div>
                <small>or sign in with</small>

                <button className="google" onClick={google}>
                    <AiFillGoogleSquare
                        className="
                    icon"
                    />
                </button>
            </div>
            <div>
                <a href="#" onClick={() => change(true)}>
                    create an account
                </a>
            </div>
        </form>
    );
};

export default Signin;
