import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function TaskDetailsPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    if(!title || !description ) return <div><h1>Task not fond</h1></div>

    return(
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
              <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button className="absolute left-0 top-0 bottom-0 mb-6 text-slate-100" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
                    <h1 className="text-slate-100 text-3xl font-bold text-center ">Detalhes da tarefa</h1>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold text-center">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
              </div>
            </div>
    )
}