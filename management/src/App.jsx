import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined,
    projects : [],
    tasks :[]
  });

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId = Math.random();
      const newTask ={
        text :text,
        projectId : prevState.selectedProjectId,
        id : taskId
      }
      return {
        ...prevState,
        tasks :[newTask,  ...prevState.tasks]
      };
    });

  }

  function handleDeleteTask(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        tasks :  prevState.tasks.filter((task) => task.id !==id),
      };
    });

  }

  function handleSelectProject (id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId : id
      };
    });
  }

  function handleStartAddProject (){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId : null
      };
    }); 
  }

  function handleCancelAddProject (){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId : undefined
      };
    });
  }

  function handleAddProject (projectData){
    setProjectState(prevState =>{
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id : projectId
      }
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects:[...prevState.projects, newProject]
      };
    }); 
  }

  function handleDeleteProject (){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects :  prevState.projects.filter(
          (project) => project.id !==prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject 
    project={selectedProject}  
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask} 
    tasks={projectState.tasks}
  />;

  if(projectState.selectedProjectId ===  null ){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProject onStartAdd={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
        onStartAdd={handleStartAddProject} 
        onSelectProject={handleSelectProject} 
        projects = {projectState.projects} 
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );

}

export default App;
