import { useState, useContext } from "react"
import { ManagementContext } from "../../store/management_context";

export default function NewTask (){
    const [enteredTask, setEnteredTask] = useState('');
    const { addTask} = useContext(ManagementContext);
    function handleChange (event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        if (enteredTask.trim()==''){
            alert ('Empty Task');
            return;
        }
        addTask(enteredTask);
        setEnteredTask('');
    }
    return(
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}