export default function TaskAdd(){
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Titulo da tarefa" className="border rounded-xl border-slate-200 outline-none p-2"/>
            <input type="text" placeholder="Descrição da tarefa" className="border rounded-xl border-slate-200 outline-none p-2"/>
            <button className="bg-slate-600 p-2 font-medium text-white rounded-md hover:bg-slate-400 hover:scale-105 duration-300">Adicionar</button>
        </div>
    )
}