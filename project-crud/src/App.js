import './App.css';
import { useState } from 'react';
import ProSideBar from './Comp/ProSideBar';
import NoProject from './Comp/NoProject';
import NewProject from './Comp/NewProject';
import ProjectSelected from './Comp/ProjectSelected';

function App() {
const [projState, setProjState]=useState({
    projectId:'undefined',
    projects:[],
})
  
const handleNoProject=()=>{
    setProjState((prevState)=>{
     return{
      ...prevState,
      projectId:null,
     }
    })
}

const handleNewProject=()=>{

}

const handleAddProject=(handleProjectData)=>{
    setProjState((prevState)=>{
        const newData ={
            id:Math.random(),
            ...handleProjectData
        }
        return{
            ...prevState,
            projectId:'undefined',
            projects:[...projState.projects, newData]
        }
    })
}

const handleSelectedProject=(projId)=>{
 setProjState((prevState)=>{
  return{
    ...prevState,
    projectId:projId,

  }
 })
 console.log(projId)
}


const deleteHandler=()=>{
    setProjState((prevState)=>{
        return{
          ...prevState,
          projectId:'undefined',
          projects:prevState.projects.filter((proj)=>proj.id!==prevState.projectId),
        }
       })
       
}

const selectClickedProject = projState.projects.find((project)=> project.id ===projState.projectId);

let content = <ProjectSelected project={selectClickedProject} handleDelete={deleteHandler}/>;
if(projState.projectId==='undefined'){
    content= <NoProject handleProjectAdd={handleNoProject}/>
}else if(projState.projectId===null){
    content = <NewProject onAdd={handleAddProject}/>
}
  return (
    <>
    <main className='h-screen my-8 flex'>
      <ProSideBar handleProjectAdd={handleNewProject} projectData={projState.projects} handleSelectedProject={handleSelectedProject} addProject={handleAddProject}/>
      {content}
    </main>
  
   </>
  );
}

export default App;
