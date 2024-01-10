import { configureStore } from "@reduxjs/toolkit";
import  saveUser  from "../features/SaveUser";

const store = configureStore({
    reducer: {
        saveUser
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store}