import IInputProps from "../interfaces/IInputProps";

export default function Input(props: IInputProps){

    return(
        <input 
        type={props.type}
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={(event) => props.onChange(event)} 
        className="border rounded-xl border-slate-200 outline-none p-2"/>
    )
}