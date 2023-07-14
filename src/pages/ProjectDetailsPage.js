// ./src/pages/ProjectDetailsPage.js

import projectsData from './../projects-data.json';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';         // <== IMPORT


function ProjectDetailsPage (props) {
  const [foundProject, setFoundProject] = useState(null); // <== ADD
  
  const { projectId } = useParams();
  console.log('projectId', projectId);  

  // This effect depends on the `projectId` value.
  // It will run on the initial render, and every time
  // the `projectId` value updates.
  useEffect(() => {                                      // <== ADD
    const project = projectsData.find((projectObj) => {
      return projectObj._id === projectId;
    })

    if (project) {
      setFoundProject(project);
    }
    
  }, [projectId]);


  return (
    <div>
      <h1>Project Details</h1>
      
      {!foundProject && <h3>Project not found!</h3>}
      
      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  )
}

export default ProjectDetailsPage;




// Having the project finding logic within the useEffect allows you to easily substitute the above logic to get the data from the server instead of getting it from a static array. Example:

// Copy
// // ...
//   const { projectId } = useParams();
//   console.log('projectId', projectId);  
 
//   useEffect(() => {
//     // Get the project by id from the server
//     axios.get('http://example.com/api/projects/' + projectId)
//       .then((response) => {
//         setFoundProject(response.data);
//       })
    
//   }, [projectId]);