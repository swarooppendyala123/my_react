import { useRef,useContext } from 'react';

import Input from './Input'
import Modal from './Modal';
import { ManagementContext } from '../../store/management_context';

export default function NewProject(){

    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const  dueDate = useRef();
    const {addOnProject, cancelAddProject} = useContext(ManagementContext);

    function handleSave(){
        const enteredTitlle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitlle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        addOnProject({
            title : enteredTitlle,
            description : enteredDescription,
            dueDate : enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption = 'Close'>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Ooops.... looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid input</p>
            </Modal> 
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button onClick={cancelAddProject} className='text-stone-800 hover:text-stone-950'>Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}