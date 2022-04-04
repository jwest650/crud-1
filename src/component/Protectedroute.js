import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protectedroute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    console.log(user);
    return <>{!user ? <Navigate to="/login" /> : children}</>;
};

export default Protectedroute;
