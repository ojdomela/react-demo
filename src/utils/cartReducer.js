import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductToCart: (state, action) => {
            state.push(action.payload);
        },
        removeProductFromCart: (state, action) => {
            const itemToRemove = state.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.splice(state.indexOf(itemToRemove), 1);
            }
        }
    }
})

removeProductFromCart(product)