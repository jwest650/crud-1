import { v4 as uuid } from "uuid";

const initialState = [
    { name: "joseph", email: "joseph@gmail.com", gen: "gen20", id: uuid() },
    { name: "Tony", email: "tony21@gmail.com", gen: "gen5", id: uuid() },
    {
        name: "Korkor",
        email: "kokor4evr@gmail.com",
        gen: "gen18",
        id: uuid(),
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_USER":
            return state.map((user) => {
                if (user.id === action.payload.id) return action.payload;
                return user;
            });

        case "ADD_USER":
            return [...state, action.payload];
        case "REMOVE_USER":
            return state.filter((f) => f.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;
