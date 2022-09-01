import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./displayReducer";

const store = configureStore({
    reducer: {
        display: displayReducer,
    },
});

export default store;