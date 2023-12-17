import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addproject,
  removeproject,
} from "../../features/filterSlice/filterSlice";

const Project = ({ project }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { projectName, colorClass } = project;
  const [check, setCheck] = useState(true);

  const handlefilter = () => {
    if (filter.filters.includes(projectName)) {
      dispatch(removeproject(projectName));
    } else {
      dispatch(addproject(projectName));
    }
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        onClick={() => {
          setCheck(!check);
          handlefilter();
        }}
        checked={check}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default Project;
