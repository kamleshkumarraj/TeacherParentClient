import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    initialState : {
        user : {}
    },
    name : 'auth',
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
        },
        clearUser : (state) => {
            state.user = null;
        },
        updateUser : (state, action) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        }
    }
})