import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        name: "No favorite?"
    },
    reducers: {
        setFavorite: (state, action) => {
            state.name = action.payload;
        },
        removeFavorite: (state) => {
            state.name = "No favorite!";
        }
    }
});


export const { setFavorite, removeFavorite } = studentSlice.actions;
export default studentSlice.reducer;