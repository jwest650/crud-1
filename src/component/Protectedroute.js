import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Protectedroute = ({ children }) => {
    let navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    return <>{!user ? navigate("/login") : children}</>;
};

export default Protectedroute;
