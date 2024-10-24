import { useState } from "react"
import Checkbox from "../filip/components/checkbox"
import ProfiliInput from "../filip/components/ProfiliInput"
import ChangeFiledProfile from "./components/ChangeFiledProfile"
import Button from "../filip/components/Button"


const PopUpChangeProfileInfo = () => {
    const [lekcii, setLekcii] = useState(true)
    const [napredokPreporaki, setNapredokPreporaki] = useState(true)
    const [promotivniPonud, setPromotivniPonud] = useState(true)
    const [novini, setNovini] = useState(true)


    return (
        <div className="px-[10%] py-4">
            <div className="pl-4 flex justify-between bg-[#0CB43F]">
                <div className="space-y-2 text-white h-full  flex flex-col my-auto">
                    <p className="text-2xl">Промена на лични податоци</p>
                    <p className="text-lg">Прегледајте или променете ги информациите за вашите лични податоци.</p>
                </div>
                <div>
                    <img className="h-[250px] w-[321px]" src="/images/filip/spar_06.svg" alt="img" />
                </div>
            </div>
            <div>
                <form className="my-6" action="">
                    <div className="flex items-center gap-4">
                        <div>
                            <img className="w-[90px] h-[80px]" src="/images/filip/profilepicture.svg" alt="" />
                        </div>
                        <button className="ml-[-10px] bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500/70 ">промени</button>
                        <div className="flex gap-1 text-orange-600 hover:text-orange-600/40"><img src="/images/filip/binicon.svg" alt="" />Избриши</div>
                    </div>
                    <div className="my-4 space-y-4 border-b-2 border-gray-300 py-2">
                        <ChangeFiledProfile field="Име и Презиме" currentValue="Tomi Andreev" link="#" />
                        <ChangeFiledProfile field="Email адреса" currentValue="email@emailadress.com" link="#" />
                        <ChangeFiledProfile field="Град" currentValue="Skopje" link="#" />
                        <ChangeFiledProfile field="Телефонски број" currentValue="077 987 664" link="#" />
                        <ChangeFiledProfile field="Лозинка" currentValue="*******" link="#" />
                    </div>
                    <div className="space-y-2 mt-12">
                        <p className="font-bold">Социјални профили</p>
                        <p>останете во контакт и споделете го вашиот напредок со заедницата</p>
                        <div className="space-y-4">
                            <ProfiliInput socijalnaMreza="facebook" />
                            <ProfiliInput socijalnaMreza="instagram" />
                            <ProfiliInput socijalnaMreza="linkedin" />
                        </div>
                    </div>
                    <div className="space-y-4 mt-12">
                        <p className="font-bold">E-mail нотификации</p>
                        <p>за што би сакале да бидете известени преку е-пошта</p>
                        <div className="px-2 flex text-[#2870ED]">
                            <Checkbox setVariable={setLekcii} variable={lekcii} value={"Известувања за нови лекции и материјали"} id="lekcii" />
                            <Checkbox setVariable={setNapredokPreporaki} variable={napredokPreporaki} value={"Напредок и препораки"} id="preporaki" />
                        </div>
                        <div className="px-2 flex text-[#2870ED]">
                            <Checkbox setVariable={setPromotivniPonud} variable={promotivniPonud} value={"Промотивни понуди и матектинг од Шпаркасе банка"} id="ponudi" />
                            <Checkbox setVariable={setNovini} variable={novini} value={"Новини на плаатформа и настани"} id="novini" />
                        </div>

                    </div>
                    <div className="flex justify-center gap-4 mt-12">
                        <Button style="border-orange-500" value="Откажи" />
                        <Button style="border-orange-500 bg-orange-500 px-12" value="Зачувај" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopUpChangeProfileInfo