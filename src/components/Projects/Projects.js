import React from "react";
import { useGetProjectsQuery } from "../../features/projectsAPI/projectsAPI";
import Project from "../Project/Project";

const Projects = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  let content;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>An Error has been occued</div>;
  } else if (!isLoading && !isError && projects.length === 0) {
    content = <div>No Projects Found</div>;
  } else if (!isLoading && !isError && projects.length > 0) {
    content = projects.map((project) => (
      <Project project={project} key={project.id}></Project>
    ));
  }
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default Projects;
