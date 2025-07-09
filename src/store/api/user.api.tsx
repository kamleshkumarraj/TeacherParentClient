import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
    reducerPath : "userApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_API_URL,
        credentials : "include",
    }),
    tagTypes : ["getUser"],
    endpoints : (builder) => ({

        // user auth related api call.
        login : builder.mutation({
            query : (payload) => ({
                url : '/student/login',
                method : "POST",
                body : payload,
                credentials : "include",
            })
        }),
        getUserData : builder.query({
            query : () => ({
                url : '/student/get-profile',
                method : "GET"
            })
        })
    })
})