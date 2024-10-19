//import Task from "./Task";
import { useState } from "react";
import Button from "./Button";
export default function SelectedProject({project, handleDelete, tasks, onDeleteTask, projectId}){
   const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    month:'short',
    day:'numeric'
   })
  
   //let nextId = 0;
   const [addTask, setAddTask] = useState([]);
   const [taskItem, setTaskItem] = useState('');
   //const taskArray=[];
   const handleInput=(e)=>{
    setTaskItem(e.target.value);
   }

   const handleAddTasks=()=>{
    //    if(addTask.trim()===''){
    //        return;
    //    }
    // if(projectId){
    //    setAddTask([
    //     ...addTask,
    //     { id: Math.random(), value: taskItem }
    //   ]);
    // }
    setAddTask((prevState)=>{
        // const newTask = {
        //   ...newTaskData,
        //   id:Math.random(),
        // }
        return{
          ...prevState,
        //   projectAdd: undefined,
        //   projects:[...projectState.projects, newProject]
          tasks:[taskItem]
        }
      })
      console.log(tasks)
      setTaskItem('');
   }
  
   //const keys = task.find(task => task.projectAdd === handleProjectId);
   const classes = "w-64 px-2 py-1 rounded-sm bg-stone-200";
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
<div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold text-stone-600 mb-2">
    {project.title}
    </h1>
    <button onClick={()=>handleDelete(project.id)} className="text-stone-600 hover:text-stone-950">
        Delete
    </button>
</div>
<p className="mb-4 text-stone-400">{formattedDate}</p>
<p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <div className="items-center gap-4">
        <p><input className={classes} type='text' onChange={handleInput} value={taskItem}/>
        <Button className="text-stone-700 hover:text-stone-950" onClick={handleAddTasks}>Add</Button>
        </p>
        
        <div >  
        {addTask.length <= 0 && (
         <p className="text-stone-800 my-4">Please add the tasks...</p>
        )}
        
      {addTask.length > 0 && (
        <ul  className="p-4 mt-8 rounded-md bg-stone-100">
            {addTask.map((task)=>(
                <li className="flex justify-between my-4" key={task.id}><span>{task.value}</span>
                <span><Button onClick={()=>onDeleteTask(task.id)} >Clear</Button></span></li>
            ))}
        </ul>
      )}
      </div> 
      </div>
           {/* <Task handleAddTasksEle={handleAddTasks} task={project.tasks} onDeleteHandler={onDeleteTask} /> */}
        </div>
    )
}