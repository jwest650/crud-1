import React, { useState } from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
const App = () => {
    return (
        <div className="p-5">
            <Form />
            <List />
        </div>
    );
};

export default App;
