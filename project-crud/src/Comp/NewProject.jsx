import { useRef } from "react"
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({onAdd}){
    const modal = useRef();
    const title = useRef();
    const description= useRef();
    const dueDate=useRef();

   const handleSave=()=>{
    const titleVal = title.current.value;
    const decriptionVal = description.current.value;
    const dueDateVal = dueDate.current.value;

    if(titleVal.trim()===''|decriptionVal.trim()===''|dueDateVal.trim()===''){
        modal.current.open();
        return;
    }

    onAdd({
        title:titleVal,
        description:decriptionVal,
        dueDate:dueDateVal
    })

   }


    return(
        <>
        <Modal ref={modal} btnCaption='Close'>
        <p className='text-xl font-bold  text-stone-700 my-4'>Input field should not be empty...</p>
        <p className='text-stone-600 mb-4'>Please fill the input fileds..</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" >Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type='text' ref={title} label={'Title'} />
                <Input ref={description} label={'Description'} textarea />
                <Input type="date" ref={dueDate} label={'Due Date'}/>
            </div>
        </div>
        </>
    )
}