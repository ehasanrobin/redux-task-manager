import { apiSlice } from "../api/apiSlice";

const projectsAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => "/projects",
    }),
    getProject: build.query({
      query: (id) => `/projects/${id}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectQuery } = projectsAPI;
