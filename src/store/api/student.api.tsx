import { userApi } from "./user.api";

export const studentApi = userApi.injectEndpoints({
    endpoints : (builder) => ({
        getStudentProfile : builder.query({
            query : () => ({
                url : "/student/my-profile",
                method : "GET",
                credentials: "include"
            }),
            transformResponse : (response) => response.data,
            providesTags : ["getUser"]
        })
    })
})

export const {useLazyGetStudentProfileQuery} = studentApi;