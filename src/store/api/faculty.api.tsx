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
        url: `/faculty/my-semester/${branchId}`,
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (res) => res?.data,
    }),

    getMyClassroomAndBatch: builder.query({
      query: (payload) => ({
        url: "/faculty/my-batch-classroom",
        method: "GET",
        credentials: "include",
        params : payload
      }),
      transformResponse: (res) => res?.data,
    })

  }),
});

export const {
  useGetFacultyProfileQuery,
  useGetMyBranchQuery,
  useLazyGetSemesterForBranchQuery,
  useLazyGetMyClassroomAndBatchQuery,
} = facultyApi;
