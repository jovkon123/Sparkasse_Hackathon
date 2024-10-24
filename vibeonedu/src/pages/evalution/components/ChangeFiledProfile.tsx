import { link, PathLike } from "fs";

interface Props{
    field: string;
    currentValue: string;
    link : string

}


const ChangeFiledProfile = ({field, currentValue, link}: Props) => {

    return(
        <div className="flex items-center justify-between border-t-2 py-1 pt-2 border-gray-300">
            <div className="flex flex-col gap-2 py-1">
                <p className="text-lg font-bold">{field}</p>
                <p className="font-thin">{currentValue}</p>
            </div>
            <a href={link}><button className="text-blue-500">Промени</button></a> 
        </div>
    )
}

export default ChangeFiledProfile