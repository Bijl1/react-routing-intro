// src/pages/ProjectsPage.js

import { useState, useEffect } from "react";

function ProjectsPage (props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);


  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
