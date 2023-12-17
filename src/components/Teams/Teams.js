import React from "react";
import Team from "../Team/Team";
import { useGetTeamsQuery } from "../../features/teamsAPI/teamsAPI";

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();

  let content;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>An Error has been occued</div>;
  } else if (!isLoading && !isError && teams.length === 0) {
    content = <div>No teams Found</div>;
  } else if (!isLoading && !isError && teams.length > 0) {
    content = teams.map((team) => <Team team={team}></Team>);
  }
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default Teams;
