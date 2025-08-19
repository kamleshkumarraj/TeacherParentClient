import { userApi } from "./user.api";

export const parentApi = userApi.injectEndpoints({
    endpoints : (builder) => ({
        getParentProfile : builder.query({
            query : () => ({
                url : "/parent/my-profile",
                method : "GET",
                credentials : "include"
            }),
            transformResponse : (res) => res?.data,
            providesTags : ["getParentProfile"]
        }),
        getAllChildren : builder.query({
            query : () => ({
                url : '/parent/get-all-children',
                method : "GET",
                credentials : "include"
            }),
            transformResponse : (res) => res?.data,
            providesTags : ["getAllChildren"]
        })
    })
})