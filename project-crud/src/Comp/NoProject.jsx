import Button from "./Button";
import noProjectImage from '../assets/no-projects.png';

export default function NoProject({handleProjectAdd}){
    return(
        <div className="mt-24 text-center w-2/3">
<img src={noProjectImage} alt='' className='w-16 h-16 object-contain mx-auto'/>
<h2 className='text-xl font-bold  text-stone-500 my-4'>No Projects Selected</h2>
<p className='text-stone-400 mb-4'>Add a project soon....</p>
<p className='mt-8'>
    <Button onClick={handleProjectAdd}>Create a new project</Button>
</p>
</div>
    )
}