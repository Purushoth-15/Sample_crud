export default function TaskItem({tasks}){
    //console.log(task.length);
    return(
        <div >  
         {tasks.length > 0 && (
           <ul  className="p-4 mt-8 rounded-md bg-stone-100">
               {tasks.map((task, i)=>(
                   <li className="flex justify-between my-4" key={i}><span>{task.taskVal}</span>
                   {/* <span><Button onClick={()=>onDeleteHandler(task.id)} >Clear</Button></span></li> */}</li>
               ))}
           </ul>
         )}
         </div> 
    )
}