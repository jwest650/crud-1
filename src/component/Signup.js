import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signup = ({ change }) => {
    const navigate = useNavigate();

    const [userInfo, setuserInfo] = useState({
        email: "",
        password: "",
    });
    async function signup(e) {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((Credential) => {
                const user = Credential.user;
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
        <form action="" onSubmit={signup}>
            <h1>Sign Up</h1>
            <div>
                <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={userInfo.email}
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    type="password"
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
                <button type="submit">Sign up</button>
            </div>

            <div>
                <a href="#" onClick={() => change(false)}>
                    Already have an account
                </a>
            </div>
        </form>
    );
};

export default Signup;
