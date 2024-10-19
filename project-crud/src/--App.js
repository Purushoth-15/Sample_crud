import './App.css';
import NewProject from './Components/NewProjects';
import NoProjectsAdded from './Components/NoProjectsAdded';
import SelectedProject from './Components/SelectedProject';
import SideBar from './Components/SideBar';
import { useState } from 'react';
function App() {
 const [projectState, setProjectState] = useState({
  projectAdd:undefined,
  projects:[],
  //tasks:[]
 })

 const handleStartProject=()=>{
  setProjectState((prevState)=>{
    return{
      ...prevState,
      projectAdd: null,
    }
  })
 }

 const handleProjects=(newProjectData)=>{
  setProjectState((prevState)=>{
    const newProject = {
      ...newProjectData,
      id:Math.random(),
    }
    return{
      ...prevState,
      projectAdd: undefined,
      projects:[...projectState.projects, newProject]
    }
  })
 }
 
const handleCancel=()=>{
  setProjectState((prevState)=>{
    return{
      ...prevState,
    projectAdd: undefined,
    }
  }
  )
}

const onSelectedProject=(id)=>{
  setProjectState((prevState)=>{
    return{
      ...prevState,
      projectAdd: id,
    }
  })
}


const onDelete=()=>{
  setProjectState((prevState)=>{
    return{
      ...prevState,
      projectAdd: undefined,
      projects: prevState.projects.filter((project)=>project.id!==prevState.projectAdd)
    }
  })
}

const onAddTask=(text)=>{
  setProjectState((prevState)=>{
    const newTask ={
      id:Math.random(),
      projectAdd:prevState.projectAdd,
      text:text,
    }
    return{
      ...prevState,
      tasks:[newTask, ...prevState.tasks]
    }
  })
}

const onDeleteTask=(id)=>{
  setProjectState((prevState)=>{
    //const taskId = id;
    return{
      ...prevState,
      //projectAdd: undefined,
      tasks: prevState.tasks.filter((task)=>task.id!==id)
    }
  })
}

console.log(projectState.projects.tasks);
const SelectedProjectItem = projectState.projects.find((project)=>project.id === projectState.projectAdd);
 
let content = <SelectedProject project={SelectedProjectItem} handleDelete={onDelete} handleAddTasks={onAddTask} tasks={projectState.projectAdd} onDeleteTask={onDeleteTask} projectId={onSelectedProject}/>;
 if (projectState.projectAdd===null){
  content= <NewProject onAdd={handleProjects} handleCancel={handleCancel}/>;
 }else if(projectState.projectAdd===undefined){
 content= <NoProjectsAdded handleProjectAdd={handleStartProject}/>;
 }

  return (
    <main className='h-screen my-8 flex'>
      <SideBar handleProjectAdd={handleStartProject} projectTitle={projectState.projects} handleSelectedProject={onSelectedProject} />
      {content}
    </main>
   
  );
}

export default App;
