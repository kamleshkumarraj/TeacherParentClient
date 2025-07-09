import { configureStore } from "@reduxjs/toolkit";
import { miscReducer } from "./slice/misc.slice";
import { userApi } from "./api/user.api";

export const store = configureStore({
    reducer : {
        // Add your reducers here
        misc : miscReducer,
        [userApi.reducerPath] : userApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})