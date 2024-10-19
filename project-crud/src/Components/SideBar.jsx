import Button from "./Button";

export default function SideBar({handleProjectAdd, projectTitle, handleSelectedProject}){
   
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
            <div>
                <Button onClick={handleProjectAdd}>+ Add Projects</Button>
            </div>
            <ul className="mt-8">
              {projectTitle.map((project)=>
            <li key={project.id}>
                <button onClick={()=>handleSelectedProject(project.id)} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
            </li>
             
            )}
            </ul>
        </aside>
    )
}