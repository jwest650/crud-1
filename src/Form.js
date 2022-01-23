import React, { useState } from "react";

const Form = ({ set }) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [gen, setgen] = useState("");

    function userUpdater(e) {
        e.preventDefault();

        const users = { name: name, email: email, gen: gen };
        set((prev) => [...prev, users]);
        setname("");
        setemail("");
        setgen("");
    }

    return (
        <div className="pt-[20px] ">
            <section className=" mx-auto   w-[30%] h-[17rem] rounded bg-white">
                <h1 className="text-center text-[25px] font-bold capitalize">
                    Enter users
                </h1>

                <form
                    action=""
                    onSubmit={userUpdater}
                    className="space-y-[18px] px-[30px] pt-[20px]"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className=" w-full p-1 px-3 outline-none border rounded"
                            value={name}
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your E-mail"
                            className=" w-full p-1 px-3 outline-none border rounded"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Gen"
                            className=" w-full p-1 px-3 outline-none border rounded"
                            value={gen}
                            onChange={(e) => {
                                setgen(e.target.value);
                            }}
                        />
                    </div>

                    <button className="bg-[#257bf6] text-white py-1  w-full rounded">
                        Add user
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Form;
