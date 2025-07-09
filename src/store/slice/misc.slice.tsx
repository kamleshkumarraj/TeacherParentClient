import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "misc",
    initialState : {
        isLoading : false,
        isMenu : false,
        isDarkMode : false,
    },
    reducers : {
        setLoading : (state, action) => {
            state.isLoading = action.payload;
        },
        setMenu : (state, action) => {
            state.isMenu = action.payload;
        },
        setDarkMode : (state, action) => {
            state.isDarkMode = action.payload;
        },
    },
})

export const miscReducer = slice.reducer;
export const {setDarkMode, setLoading, setMenu} = slice.actions;