import { useEffect, useState } from "react"
import TaskAdd from "../components/TaskAdd"
import TaskList from "../components/TaskList"
import ITask from "../interfaces/ITask"
function App() {
  const strg = localStorage.getItem("tasks")
  const [tasks , setTasks] = useState(strg ? JSON.parse(strg) as ITask[] : [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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
        <TaskList tasks={tasks} onTaskClick={onTaskClick} onDeleteButtonClick={onTaskDeleteClick}/>
      </div>
    </div>
  )
}
export default App