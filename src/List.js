import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
const List = () => {
    const users = useSelector((state) => state);
    console.log(users);
    const dispatch = useDispatch();
    const [show, setshow] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [id, setid] = useState("");
    const [gen, setgen] = useState("");
    function edituser(user) {
        setemail(user.email);
        setname(user.name);
        setgen(user.gen);
        setid(user.id);
        setshow(true);
    }
    async function handlechange() {
        const newUser = {
            name,
            email,
            id,
            gen,
        };
        await updateDoc(doc(db, "userlist", id), {
            ...newUser,
        });
        setshow(false);
    }

    async function deleteUser(id) {
        await deleteDoc(doc(db, "userlist", id));
    }
    return (
        <div className=" mx-auto content">
            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gen</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {users.map((user) => {
                        return (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gen}</td>
                                    <td>
                                        <button
                                            className="btn"
                                            onClick={() => edituser(user)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <Modal
                                    show={show}
                                    onHide={() => setshow(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit User</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) =>
                                                setname(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) =>
                                                setemail(e.target.value)
                                            }
                                        />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={() => setshow(false)}
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={handlechange}
                                        >
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </tbody>
                        );
                    })}
                </table>
            ) : (
                <h3 className="">No users </h3>
            )}
        </div>
    );
};

export default List;
