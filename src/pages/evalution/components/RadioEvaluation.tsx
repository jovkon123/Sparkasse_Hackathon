interface Props{
    id: string;
    text: string;
    value: number;
    name: string;
}

const RadioEvaluation = ({id,text, value, name}: Props) => {



    return(
        <div className="flex gap-2 items-center text-lg"> 
                <input className="appearance-none bg-blue-200 p-1 border-8 border-blue-200 rounded-full  focus:border-blue-500" value={value} type="radio" name={name} id={id} />
                <label htmlFor={id}>{text}</label>
        </div>
    )
} 

export default RadioEvaluation