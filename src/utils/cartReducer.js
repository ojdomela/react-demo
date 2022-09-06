import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, image, amount } = action.payload;
            const item = state.find((item) => item.id === id);
            if (item) {
                item.amount += amount;
            } else {
                state.push({ id, name, price, image, amount });
            }
        },
        clearCart: (state) => {
            state = [];
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state = state.filter((item) => item.id !== id);
        }
    }
});


export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;