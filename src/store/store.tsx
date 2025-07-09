import { configureStore } from "@reduxjs/toolkit";
import { miscReducer } from "./slice/misc.slice";

export const store = configureStore({
    reducer : {
        // Add your reducers here
        misc : miscReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})