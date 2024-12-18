import { ChangeEvent, useState } from "react"
import Input from "./Input"
import Button from "./Button"

export default function TaskAdd(props: {onTaskCreateSubmit: CallableFunction}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input placeholder="Titulo da tarefa" type="text" value={title} onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}/>
            <Input placeholder="Descricao da tarefa" type="text" value={description} onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}/>
            <Button text="Adicionar" onClick={() => {
                if(!title.trim() || !description.trim()) return alert("Vacilou meu anjo, faltou algo")
                    props.onTaskCreateSubmit(title, description)
                    setTitle("")
                    setDescription("")
            }}/>
        </div>
    )
}