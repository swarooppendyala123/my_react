import { createContext, useState } from "react";

export const ManagementContext = createContext({
    selectedProjectId : undefined,
    projects : [],
    tasks :[],
    addOnProject : () => {},
    deleteProject : () => {},
    addTask : () =>{},
    deleteTask : ()=> {},
    selectProject : () =>{},
    startAddProject : () => {},
    cancelAddProject : () => {},
});

export default function ManagementContextProvider ( {children}){
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
    
     
      const ctxValue ={
        selectedProjectId : projectState.selectedProjectId,
        projects : projectState.projects,
        tasks :projectState.tasks,
        addOnProject : handleAddProject,
        deleteProject : handleDeleteProject,
        addTask : handleAddTask,
        deleteTask : handleDeleteTask,
        selectProject : handleSelectProject,
        startAddProject : handleStartAddProject,
        cancelAddProject : handleCancelAddProject,
      };
    return (
        <ManagementContext.Provider value={ctxValue}>{ children }</ManagementContext.Provider>
    );
}