import { createStore, combineReducers } from "redux";
import { userAuth, userReducer } from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    storage,
    blacklist: "user",
};
const reducer = combineReducers({
    auth: userAuth,
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
