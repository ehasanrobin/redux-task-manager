import React from "react";
import Projects from "../Projects/Projects";
import Teams from "../Teams/Teams";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {/* <!-- Projects List --> */}
        <Projects></Projects>

        {/* <!-- Team Members --> */}
        <Teams></Teams>
      </div>
    </>
  );
};

export default Sidebar;
