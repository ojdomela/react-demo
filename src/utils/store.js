import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./displayReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
    reducer: {
        display: displayReducer,
        cart: cartReducer,
    },
});

export default store;