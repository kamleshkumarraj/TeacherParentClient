import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isAuthenticated: false,
        role : null,
    },
    reducers : {
        setAuth : (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.role = action.payload.role;
        },
        resetAuth : (state, _) => {
            state.isAuthenticated = false;
            state.role = null;
        }
    }
})

export const {resetAuth, setAuth} = authSlice.actions

export const authReducer = authSlice.reducer;

export const getAuthData = (state) => state.auth;