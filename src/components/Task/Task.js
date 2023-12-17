import React from "react";
import TeamMember from "./TeamMember";

const Task = ({ task }) => {
  const { project, taskName, teamMember, status, id } = task;
  return (
    <div className="lws-task">
      <div className="flex items-center gap-2 text-slate">
        <h2 className="lws-date">26</h2>
        <h4 className="lws-month">March</h4>
      </div>

      <div className="lws-taskContainer">
        <h1 className="lws-task-title">{taskName}</h1>
        <span className={`lws-task-badge ${project.colorClass}`}>
          {project.projectName}
        </span>
      </div>

      <TeamMember task={task}></TeamMember>
    </div>
  );
};

export default Task;
