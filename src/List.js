import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const List = ({ users, deleteUser, edit }) => {
    const [show, setshow] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [id, setid] = useState("");
    const [gen, setgen] = useState("");
    function edituser(user) {
        setshow(true);
        setname(user.name);
        setemail(user.email);
        setid(user.id);
        setgen(user.gen);
    }
    function handlechange() {
        const newUser = {
            name,
            email,
            id,
            gen,
        };

        edit(id, newUser);

        setshow(false);
    }
    console.log(name, email);
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
                            <tbody>
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
                                </Modal>{" "}
                            </tbody>
                        );
                    })}
                </table>
            ) : (
                <h3 className="">No users available</h3>
            )}
        </div>
    );
};

export default List;
