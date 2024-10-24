interface Props {
    style: string,
    value: string
}

const EvaluationButton = ({style,value}: Props) => {

    return(
        <div>
            <input className={`${style} px-6 py-2 rounded-lg border-2 cursor-pointer `} type="button" value={value} />
        </div>
    )
}
export default EvaluationButton