import { apiSlice } from "../api/apiSlice";

const tasksAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
      providesTags: ["tasks"],
    }),
    getTask: build.query({
      query: (id) => `/tasks/${id}`,
    }),
    addTask: build.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTask: build.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),

    deleteTask: build.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
  useGetTaskQuery,
} = tasksAPI;
