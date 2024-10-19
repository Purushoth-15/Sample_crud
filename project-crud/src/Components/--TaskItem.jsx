import Button from "./Button";
//import { useState } from "react";
export default function TaskItem({taskItem, onDeleteHandler, handleProjectId, task}){
   // const [taskItems, setTaskItems] = useState('');
    const keys = taskItem.find(task => task.projectAdd === handleProjectId);
   // console.log(keys)
    return(
        <>
     <div >  
     {!keys && (
         <p className="text-stone-800 my-4">Please add the tasks...</p>
        )}
      {keys && taskItem.length > 0 && (
        <ul key={handleProjectId} className="p-4 mt-8 rounded-md bg-stone-100">
            {taskItem.map((task)=>(
                <li className="flex justify-between my-4" key={task.id}><span>{task.text}</span>
                <span><Button onClick={()=>onDeleteHandler(task.id)} >Clear</Button></span></li>
            ))}
        </ul>
      )}
      </div> 
        </>
    )
}