import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
const Dashboard = () => {
    const dispatch = useDispatch();
    function signedOut() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch({ type: "logout", payload: null });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="dash">
            <button onClick={signedOut}>logout</button>
        </div>
    );
};

export default Dashboard;
