import React, { useEffect, useState } from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { db } from "./firebase/firebase";
import { onSnapshot, query, orderBy, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
const App = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        const q = query(collection(db, "userlist"), orderBy("created", "desc"));
        onSnapshot(q, (snap) => {
            let data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: "ADD_USER", payload: [...data] });
        });
    }, []);

    return (
        <div className="p-5">
            <Form />
            <List />
        </div>
    );
};

export default App;
