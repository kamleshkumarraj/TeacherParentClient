import { configureStore } from "@reduxjs/toolkit";
import { miscReducer } from "./slice/misc.slice";
import { userApi } from "./api/user.api";
import { authReducer } from "./slice/authSlice";

export const store = configureStore({
    reducer : {
        // Add your reducers here
        auth : authReducer,
        misc : miscReducer,
        [userApi.reducerPath] : userApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})