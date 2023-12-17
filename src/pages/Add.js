import React, { useEffect, useState } from "react";
import {
  useGetProjectQuery,
  useGetProjectsQuery,
} from "../features/projectsAPI/projectsAPI";
import { useAddTaskMutation } from "../features/tasksAPI/tasksAPI";
import {
  useGetTeamQuery,
  useGetTeamsQuery,
} from "../features/teamsAPI/teamsAPI";

const Add = () => {
  const { data: teams, isLoading } = useGetTeamsQuery();
  const { data: projects, isLoading: projectLoading } = useGetProjectsQuery();
  const [taskName, setTaskName] = useState("");
  const [skip, setSkip] = useState(true);
  const [assignTo, setAssignTo] = useState(null);
  const [deadline, setDeadline] = useState("null");
  const [projectName, setProjectName] = useState(null);
  const { data: teamMember } = useGetTeamQuery(assignTo, {
    skip: skip,
  });
  const [addTask, { isSuccess, isLoading: taskLoading }] = useAddTaskMutation();
  const { data: project } = useGetProjectQuery(projectName, {
    skip: skip,
  });
  useEffect(() => {
    if (assignTo !== null && projectName !== null) {
      setSkip(false);
    }
  }, [assignTo, projectName]);
  // project list show
  let ProjectList;
  if (projectLoading) {
    ProjectList = <div>loading</div>;
  } else if (projects.length > 0) {
    ProjectList = projects.map((project) => (
      <option value={project.id}>{project.projectName}</option>
    ));
  }
  // team list show
  let teamList;
  if (isLoading) {
    teamList = <div>loading</div>;
  } else if (teams.length > 0) {
    teamList = teams.map((team) => (
      <option value={team.id}>{team.name}</option>
    ));
  }

  // add submit handler

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      taskName,
      teamMember,
      project,
      deadline,
    };
    addTask(data);
  };
  return (
    <>
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Create Task for Your Team
          </h1>
          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="fieldContainer">
                <label for="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  value={assignTo}
                  onChange={(e) => setAssignTo(Number(e.target.value))}
                >
                  <option value="" hidden selected>
                    Select Job
                  </option>
                  {teamList}
                </select>
              </div>
              <div className="fieldContainer">
                <label for="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(Number(e.target.value))}
                >
                  <option value="" hidden selected>
                    Select Project
                  </option>

                  {ProjectList}
                </select>
              </div>

              <div className="fieldContainer">
                <label for="lws-deadline">Deadline</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  name="deadline"
                  id="lws-deadline"
                  required
                />
              </div>

              <div className="text-right">
                <button type="submit" className="lws-submit">
                  Save
                </button>
              </div>
              {isSuccess && !taskLoading && <div>Task added Successfully</div>}
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Add;
