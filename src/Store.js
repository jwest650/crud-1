import { createStore, combineReducers } from "redux";
import { userAuth, userReducer } from "./Reducer";

const reducer = combineReducers({
    auth: userAuth,
    user: userReducer,
});
export const store = createStore(reducer);
