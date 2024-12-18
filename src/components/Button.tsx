export default function Button(props: {onClick: CallableFunction, text: string | JSX.Element, styles?: string}){
    return (
        <button onClick={() => props.onClick()} 
    className={`bg-slate-600 p-2 font-medium text-white rounded-md hover:bg-slate-400 hover:scale-105 duration-300 ${props.styles}`}>
        {props.text}
        </button>
    )
}