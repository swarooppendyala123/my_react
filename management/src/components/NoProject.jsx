import noProjectImage from '../assets/no-projects.png'
import Button from "./Button";

export default function NoProject({onStartAdd}){
    return(
        <div className="mt-24 text-center w-2/3" >
            <img src={noProjectImage} alt='An empty task list' className='h-16 w-16 object-contain mx-auto'></img>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or Create new Project</p>
            <p className='mt-8'>
                <Button onClick={onStartAdd}>Create new Project</Button>
            </p>
        </div>
    );
}