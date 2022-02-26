import React, { useState } from "react";
import form from "./form.module.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
const Form = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [gen, setgen] = useState("");
    let dispatch = useDispatch();
    function adduser(e) {
        e.preventDefault();
        const newUser = { name: name, email: email, gen: gen, id: uuid() };
        dispatch({ type: "ADD_USER", payload: newUser });
    }
    return (
        <div className="bg-white w-25 p-4 mx-auto ">
            <h6 className={form.h6}>Add your details</h6>
            <small>
                For more info? <a href="">click here</a>
            </small>
            <form action="" onSubmit={adduser}>
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

                <button className={form.btn} type="submit">
                    Add Me
                </button>
            </form>
        </div>
    );
};

export default Form;
