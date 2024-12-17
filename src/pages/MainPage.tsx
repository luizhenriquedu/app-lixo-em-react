import { useState } from "react"
import TaskAdd from "../components/TaskAdd"
import TaskList from "../components/TaskList"
import ITask from "../interfaces/ITask"
function App() {
  const [tasks , setTasks] = useState([
    {
      id: 1,
      title: "legal",
      description: "legal2",
      isDone: false
    },
    {
      id: 2,
      title: "legal",
      description: "legal2",
      isDone: false
    },
    {
      id: 3,
      title: "legal",
      description: "legal2",
      isDone: false
    }
  ])
  function onTaskCreateSubmit(title: string, description: string){
    
    const newTask: ITask = {
      id: tasks.length + 1,
      title,
      description,
      isDone: false
    }
    setTasks([...tasks, newTask])

  }

  function onTaskDeleteClick(TaskId: number){
    const newTasks = tasks.filter(task => task.id != TaskId)
    setTasks(newTasks)
  }
  function onTaskClick(TaskId: number){
    const newTasks = tasks.map(task => {
      if(TaskId == task.id) return {...task, isDone: !task.isDone}
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>
        <TaskAdd onTaskCreateSubmit={onTaskCreateSubmit}/>
        <TaskList tasks={tasks as ITask[]} onTaskClick={onTaskClick} onDeleteButtonClick={onTaskDeleteClick}/>
      </div>
    </div>
  )
}
export default App