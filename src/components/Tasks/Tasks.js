import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/tasksAPI/tasksAPI";
import Task from "../Task/Task";

const Tasks = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const filter = useSelector((state) => state.filter);
  const { search } = useSelector((state) => state.filter);
  let content;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>An Error has been occued</div>;
  } else if (!isLoading && !isError && tasks.length === 0) {
    content = <div>No teams Found</div>;
  } else if (!isLoading && !isError && tasks.length > 0) {
    content = tasks
      .filter((item) => {
        if (item.taskName.includes(search)) {
          return true;
        }
        return false;
      })
      .filter((item) => {
        if (!filter.filters.includes(item.project.projectName)) {
          return true;
        }
        return false;
      })
      .map((task) => <Task task={task}></Task>);
  }
  return <div className="lws-task-list">{content}</div>;
};

export default Tasks;
