import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["getUser", "getTeacherProfile", "getParentProfile", "getAllChildren"],
  endpoints: (builder) => ({
    // user auth related api call.
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    logout : builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["getUser"],
    }),

    directLogin : builder.mutation({
      query : (payload) => ({
        url : "/auth/direct-login",
        method : "POST",
        credentials : "include"
      })
    })

  }),
});

export const { useLoginMutation, useLogoutMutation, useDirectLoginMutation } = userApi;
