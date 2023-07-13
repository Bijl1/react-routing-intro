import './App.css';
import Navbar from "./components/Navbar";      
import HomePage from "./pages/HomePage";       
import AboutPage from "./pages/AboutPage";    
import ProjectsPage from "./pages/ProjectsPage";   
import ErrorPage from "./pages/ErrorPage";         
 
import { Routes, Route } from "react-router-dom";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";  // <== IMPORT 
import projectsData from "./projects-data.json";
 
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
 
//       <Routes>
//         {/* <Route  path="/" element={<HomePage />} /> */}
//         <Route  path="/" element={<HomePageWithNavigate />} />   {/* <== ADD */}
//         <Route path="/about" element={<AboutPage/>} />
//         <Route path="/projects" element={<ProjectsPage/>} />
 
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>      
//     </div>
//   );
// }
 
// export default App;

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* <Route  path="/" element={<HomePage />} /> */}
        <Route  path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage/>} />
        
        <Route 
          path="/projects" 
          element={ <ProjectsPage projects={projectsData} /> } 
        />
 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
 
export default App;