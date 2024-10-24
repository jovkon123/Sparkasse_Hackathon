interface Props {
    style: string,
    value: string
}

const Button = ({style,value}: Props) => {

    return(
        <div>
            <input className={`${style} px-6 py-2 rounded-lg border-2 `} type="button" value={value} />
        </div>
    )
}
export default Button