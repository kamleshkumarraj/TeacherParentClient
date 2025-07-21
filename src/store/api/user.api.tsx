import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["getUser"],
  endpoints: (builder) => ({
    // user auth related api call.
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
      invalidatesTags: ["getUser"],
    }),

    logout : builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["getUser"],
    }),

    getUserData: builder.query({
      query: (args) => ({
        url: "/student/get-my-profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags : ["getUser"],
    }),
  }),
});

export const { useLoginMutation, useGetUserDataQuery, useLogoutMutation } = userApi;
