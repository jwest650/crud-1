import React, { useState } from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import List from "./List";
const App = () => {
    const [users, setusers] = useState([
        { name: "joseph", email: "joseph@gmail.com", gen: "gen20", id: uuid() },
        { name: "Tony", email: "tony21@gmail.com", gen: "gen5", id: uuid() },
        {
            name: "Korkor",
            email: "kokor4evr@gmail.com",
            gen: "gen18",
            id: uuid(),
        },
    ]);

    function deleteUser(id) {
        const filtered = users.filter((user) => user.id !== id);
        setusers(filtered);
    }
    function editUser(id, newuser) {
        const edited = users.map((user) => {
            if (user.id === id) return newuser;
            return user;
        });
        setusers(edited);
    }
    console.log(users);
    return (
        <div className="p-5">
            <Form add={setusers} />
            <List users={users} deleteUser={deleteUser} edit={editUser} />
        </div>
    );
};

export default App;
