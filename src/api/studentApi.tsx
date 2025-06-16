import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const studentApi = createApi({
    reducerPath : "studentApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_API_BASE_URL,
        credentials : 'include'
    }),
    tagTypes : ['getStudent'],

    endpoints : (builder) => ({
        // Endpoint for student registration
        login : builder.mutation({
            query : ({fcType, credentials}) => ({
                url : `${fcType}/login`,
                method : 'POST',
                body : credentials,
                credentials : 'include'
            }),
            invalidatesTags : ['getStudent'],
            transformResponse : (response) => ({
                data : response.data
            }),

        })
    })
})

export const {useLoginMutation} = studentApi;