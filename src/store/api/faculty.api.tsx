import { userApi } from "./user.api";

export const facultyApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacultyProfile: builder.query({
      query: () => ({
        url: "/faculty/my-profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["getTeacherProfile"],
      transformResponse: (response) => response?.data,
    }),

    getMyBranch: builder.query({
      query: () => ({
        url: "/faculty/my-branch",
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (res) => res?.data,
    }),

    getSemesterForBranch: builder.query({
      query: (branchId) => ({
        url: `/faculty/get-semester/${branchId}`,
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (res) => res?.data,
    }),
  }),
});

export const {
  useGetFacultyProfileQuery,
  useGetMyBranchQuery,
  useLazyGetSemesterForBranchQuery,
} = facultyApi;
