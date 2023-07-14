// src/pages/ProjectDetailsPage.js

import projectsData from './../projects-data.json';
import { useParams, Link } from 'react-router-dom'

function ProjectDetailsPage(props) {
  
  const { projectId } = useParams();
  console.log('projectId -->', projectId);
  
  return (
    <div>
      <h1>Project Details</h1>
      
      <Link to="/projects">Back</Link>
    </div>
  )
}

export default ProjectDetailsPage;
