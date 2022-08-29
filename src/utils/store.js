import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentReducer";

const store = configureStore({
    reducer: {
        // cart: cartReducer,
        student: studentReducer
    },
});

export default store;