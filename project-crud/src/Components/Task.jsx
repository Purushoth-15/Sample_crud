import Button from "./Button";
//import Input from "./Input";
import {useState } from "react";


export default function Task({handleAddTasksEle, task, onDeleteHandler, handleProjectId, selectedTask}){
    const [addTask, setAddTask] = useState('');
    const handleInput=(e)=>{
        setAddTask(e.target.value);
    }

    const handleAddTasksVal=()=>{
        if(addTask.trim()===''){
            return;
        }
        
        handleAddTasksEle(addTask);
            setAddTask('');
    }
    //const keys = task.find(task => task.projectAdd === handleProjectId);
    const classes = "w-64 px-2 py-1 rounded-sm bg-stone-200";
    return(
       <div className="items-center gap-4">
        <p><input className={classes} type='text' onChange={handleInput} value={addTask}/>
        <Button className="text-stone-700 hover:text-stone-950" onClick={handleAddTasksVal}>Add</Button>
        </p>
        
        <div >  
        {task.length > 0 && (
         <p className="text-stone-800 my-4">Please add the tasks...</p>
        )}
        
      {task.length > 0 && (
        <ul key={handleProjectId} className="p-4 mt-8 rounded-md bg-stone-100">
            {task.map((task)=>(
                <li className="flex justify-between my-4" key={task.id}><span>{task.text}</span>
                <span><Button onClick={()=>onDeleteHandler(task.id)} >Clear</Button></span></li>
            ))}
        </ul>
      )}
      </div> 
      </div>
    )
}