import React, { useState } from "react";
import form from "./form.module.css";
import { v4 as uuid } from "uuid";
const Form = ({ add }) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [gen, setgen] = useState("");
    function adduser() {
        const newUser = { name: name, email: email, gen: gen, id: uuid() };
        add((prev) => [...prev, newUser]);
    }
    return (
        <div className="bg-white w-25 p-4 mx-auto ">
            <h6 className={form.h6}>Add your details</h6>
            <small>
                For more info? <a href="">click here</a>
            </small>
            <section className={form.section}>
                <label htmlFor="" className={form.label}>
                    Name
                </label>
                <input
                    placeholder="Your Name"
                    type="text"
                    className={form.input}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </section>
            <section className={form.section}>
                <label htmlFor="" className={form.label}>
                    Email
                </label>
                <input
                    placeholder="Your Email"
                    type="text"
                    className={form.input}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
            </section>
            <section className={form.section}>
                <label htmlFor="" className={form.label}>
                    Gen
                </label>
                <input
                    placeholder="Your Gen"
                    type="text"
                    className={form.input}
                    value={gen}
                    onChange={(e) => setgen(e.target.value)}
                />
            </section>

            <button className={form.btn} onClick={adduser}>
                Add Me
            </button>
        </div>
    );
};

export default Form;
