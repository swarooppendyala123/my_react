import { useContext } from "react";
import Tasks from "./Tasks";
import { ManagementContext } from "../../store/management_context";

export default function SelectedProject({project}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year : "numeric",
        month : 'short',
        day : 'numeric'
    });
    const {deleteProject, tasks } = useContext(ManagementContext);
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold uppercase text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={deleteProject} className="px-6 py-2 rounded-md bg-stone-600 text-stone-50 hover:bg-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description }</p>
            </header>
            <Tasks tasks={tasks}/>
        </div>
    );
}