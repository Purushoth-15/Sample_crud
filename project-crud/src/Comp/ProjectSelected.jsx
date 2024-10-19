import Button from "./Button";
import Input from "./Input";
import { useRef, useState } from "react";
import TaskItem from "./TaskItem";

export default function ProjectSelected({project, handleDelete}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
       });

       const [addTask, setAddTask]= useState({
        parentTaskId:project.id,
        taskItems:[],

       });
       const taskInput = useRef();
       const classes = "w-64 px-2 py-1 rounded-sm bg-stone-200";
      // let valueT = taskInput.current.value;
    const handleAddTasks=()=>{
        setAddTask((prevState)=>{
           
            const newTask ={
                 taskVal: taskInput.current.value,
                id: Math.random(),
            }
            taskInput.current.value ='';
            return{
              ...prevState,
              taskItems:[...addTask.taskItems, newTask],
            }
        })
        
    }   

let flag=true;

    return(
        <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
<div className="flex items-center justify-between">
<h1 className="text-3xl font-bold text-stone-600 mb-2">
{project.title}
</h1>
<Button onClick={handleDelete} className="text-stone-600 hover:text-stone-950">
    Delete
</Button>
</div>
<p className="mb-4 text-stone-400">{formattedDate}</p>
<p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <div className="items-center gap-4">
    <p>
        {/* <input className={classes} type='text' onChange={handleInput} value={taskItem}/> */}
        <Input type='text' ref={taskInput} label={'TaskItem'} className={classes}/>
    <Button className="text-stone-700 hover:text-stone-950" onClick={handleAddTasks}>Add</Button>
    </p>
    {flag && <p className="text-stone-800 my-4">Please add the tasks...</p>}
    <TaskItem tasks={addTask.taskItems} />
    </div> 
        </div>
    )
}