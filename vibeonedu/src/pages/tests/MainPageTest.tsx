import Image from "next/image";
import Button from "../filip/components/Button";
const MainPageTest = () => {

    return(
        <div className="mx-[10%] h-screen flex flex-col items-center justify-center">
            <Image 
            src="/images/filip/vibeonedu.svg" 
            alt="Welcome Image"
            width={179}  
            height={230} 
            className=""
            />
                        
            <p className="text-2xl font-bold my-12">Tи честитаме што стигна до овој важен момент!</p>
            <p >Ова е последниот чекор пред да го потврдиш своето знаење. Одговори на 10-те прашања за да го завршиш курсот – со најмалку 7 точни одговори ќе добиеш сертификат, а ако точно одговориш на сите, те очекува сертификат со посебна ознака. Веруваме во тебе, дај сè од себе и покажи го твојот успех!</p>
            <a className="my-12" href="#"><Button style="text-white border-orange-500 bg-orange-500 px-16" value="Кон тестот"/></a>
        </div>
    )

}

export default MainPageTest