// src/pages/ProjectsPage.js
 
import { useState, useEffect } from "react";
import projectsData from "./../projects-data.json";
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
 
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(props.projects);                  // <== UPDATE
  }, [props.projects]);                           // <== UPDATE
 
  
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