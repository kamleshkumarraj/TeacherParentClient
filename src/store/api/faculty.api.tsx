import { userApi } from "./user.api";


export const facultyApi = userApi.injectEndpoints({
    endpoints : (builder) => ({
        getFacultyProfile : builder.query({
            query : () => ({
                url : "/faculty/my-profile",
                method : "GET",
                credentials : "include"
            }),
            providesTags : ["getTeacherProfile"],
            transformResponse : (response) => response?.data
        })
    })
})

export const {useLazyGetFacultyProfileQuery} = facultyApi