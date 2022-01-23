import React from "react";

const List = (props) => {
    return (
        <div className="h-[300px] w-[50%] overflow-y-auto mx-auto mt-10 ">
            <table className="table-auto shadow-lg bg-white w-full ">
                <thead>
                    <tr className="capitalize">
                        <th className="bg-blue-100 border text-center px-8 py-4">
                            name
                        </th>
                        <th className="bg-blue-100 border text-center px-8 py-4">
                            email
                        </th>
                        <th className="bg-blue-100 border text-center px-8 py-4">
                            gen
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((a, i) => (
                        <tr className="capitalize">
                            <td className="border text-center py-4">
                                {a.name}
                            </td>
                            <td className="border text-center py-4">
                                {a.email}
                            </td>
                            <td className="border text-center py-4">{a.gen}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
