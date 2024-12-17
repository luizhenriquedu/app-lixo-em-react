import { useState } from "react"

export default function TaskAdd(props: {onTaskCreateSubmit: CallableFunction}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" id="title" placeholder="Titulo da tarefa" value={title} onChange={(event) => setTitle(event.target.value)} className="border rounded-xl border-slate-200 outline-none p-2"/>
            <input type="text" placeholder="Descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}
            className="border rounded-xl border-slate-200 outline-none p-2"/>
            <button onClick={() => {
                if(!title.trim() || !description.trim()) return alert("Vacilou meu anjo, faltou algo")
                props.onTaskCreateSubmit(title, description)
                setTitle("")
                setDescription("")
            }} className="bg-slate-600 p-2 font-medium text-white rounded-md hover:bg-slate-400 hover:scale-105 duration-300">Adicionar</button>
        </div>
    )
}