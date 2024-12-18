import { ChevronRightIcon, TrashIcon } from "lucide-react";
import ITask from "../interfaces/ITask";
import { useNavigate } from "react-router-dom";

export default function TaskList(props: {tasks: ITask[], onTaskClick: CallableFunction, onDeleteButtonClick: CallableFunction } ){
    const navigate = useNavigate()
    function onClickTaskDetails(task: ITask){
        navigate(`/TaskDetail?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}`)
    }
 
    return(
        <ul className="space-y-3 bg-slate-200 p-6 rounded-md">
            {
            
            props.tasks.map(
                (task) => <li key={task.id} className="flex gap-2">

                    <button className={`bg-slate-400 w-full text-white text-left p-2 hover:bg-slate-300 duration-200 font-bold rounded-md ${task.isDone && "line-through"}`}
                    onClick={() => props.onTaskClick(task.id)}>
                        {task.title}
                    </button>

                    <button className="bg-slate-400 rounded-md p-2 text-white" onClick={() => onClickTaskDetails(task)}><ChevronRightIcon/></button>

                    <button className="bg-slate-400 rounded-md p-2 text-white" onClick={() => props.onDeleteButtonClick(task.id)}><TrashIcon/></button>
                    </li>
                )}
        </ul>  
    )
}