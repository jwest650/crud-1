import { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
    const [users, setusers] = useState([
        { name: "joseph", email: "joseph@gmail.com", gen: "20" },
        { name: "tony", email: "tony@gmail.com", gen: "18" },
        { name: "kokor", email: "kokor@gmail.com", gen: "19" },
    ]);
    console.log(users);

    return (
        <div className=" h-screen bg-[#f1f4fe]">
            <Form set={setusers} />
            <List users={users} />
        </div>
    );
}

export default App;
