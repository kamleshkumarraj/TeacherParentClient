import { userApi } from "./user.api";


export const facultyApi = userApi.injectEndpoints({
    endpoints : (builder) => ({
        getFacultyProfile : builder.query({
            query : () => ({
                url : "/faculty/my-profile",
                method : "GET",
                credentials : "include"
            }),
            transformResponse : (response) => response?.data
        })
    })
})