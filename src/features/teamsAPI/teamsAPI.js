import { apiSlice } from "../api/apiSlice";

const teamsAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTeams: build.query({
      query: () => "/team",
    }),
    getTeam: build.query({
      query: (id) => `/team/${id}`,
    }),
  }),
});

export const { useGetTeamsQuery, useGetTeamQuery } = teamsAPI;
