import React, { useEffect } from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { db } from "./firebase/firebase";
import { onSnapshot, query, orderBy, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Authenticate from "./component/authenticate";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Protectedroute from "./component/Protectedroute";
import Dashboard from "./component/Dashboard";

const App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "login", payload: user });
            } else {
                console.log("user signed outs");
            }
        });
    }, []);

    useEffect(() => {
        const q = query(collection(db, "userlist"), orderBy("created", "desc"));
        onSnapshot(q, (snap) => {
            let data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: "ADD_USER", payload: [...data] });
        });
    }, []);

    return (
        <div className="p-5">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Protectedroute>
                                <Dashboard />
                                <Form />
                                <List />
                            </Protectedroute>
                        }
                    />
                    <Route path="/login" element={<Authenticate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
