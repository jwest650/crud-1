const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...action.payload];

        default:
            return state;
    }
};
const userAuth = (state = { user: null }, action) => {
    switch (action.type) {
        case "login":
            return { user: action.payload };
        case "logout":
            return { user: action.payload };
        default:
            return state;
    }
};

export { userAuth, userReducer };
