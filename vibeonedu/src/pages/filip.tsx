import React, { useState } from "react";
import Image from "next/image";
import ProfiliInput from "./filip/components/ProfiliInput";
import Button from "./filip/components/Button";
import Checkbox from "./filip/components/checkbox";

const filip = () => {
    const [lekcii, setLekcii] =  useState(true)
    const [napredokPreporaki, setNapredokPreporaki] = useState(true)
    const [promotivniPonud, setPromotivniPonud] = useState(true)
    const [novini, setNovini] = useState(true)
    const [image, setImage] = useState()
    return (
        <div className="px-[10%] py-4">
            <form className="space-y-6" action="">
            <div className="space-y-4">
                <p className="font-bold">E-mail нотификации</p>
                <p>за што би сакале да бидете известени преку е-пошта</p>
                <div className="px-2 flex text-[#2870ED]">
                        <Checkbox setVariable={setLekcii} variable={lekcii} value={"Известувања за нови лекции и материјали"} id="lekcii"  />
                        <Checkbox setVariable={setNapredokPreporaki} variable={napredokPreporaki} value={"Напредок и препораки"} id="preporaki"  />
                </div>
                <div className="px-2 flex text-[#2870ED]">
                    <Checkbox setVariable={setPromotivniPonud} variable={promotivniPonud} value={"Промотивни понуди и матектинг од Шпаркасе банка"} id="ponudi"  />
                    <Checkbox setVariable={setNovini} variable={novini} value={"Новини на плаатформа и настани"} id="novini"  />
                </div>
                
            </div>
            <div className="flex justify-between rounded-lg p-8 bg-[#2870ED]">
                <div className="space-y-2 text-white w-[50%] my-auto text-left">
                    <p className="text-xl">Лука и Ана ти посакуваат</p>
                    <p className="text-4xl">Добредојде на</p>
                    <p className="text-4xl">VibeOnEdu!</p>
                </div>
                <div className="w-[50%] flex justify-center text-center">
                    <Image 
                        src="/images/filip/spar_03.png" 
                        alt="Welcome Image"
                        width={387}  
                        height={440} 
                        className="rounded-full"
                    />
                </div>
            </div>
            <p>За подобро искуство, персонализирај го твојот профил и додади информации за твоите цели и интереси.</p>
            <div>
            <input
            type="file"
            id="addPicture"
            hidden
            onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    setImage(URL.createObjectURL(e.target.files[0]));
                }
            }}
            />
                <label htmlFor="addPicture">
                <div className="text-orange-400 cursor-pointer rounded-lg flex flex-col  items-center justify-center w-32 h-32 m-auto border-orange-400 border-4 font-bold">
                        <p>Додади</p>
                        <p>фотографија</p>
                </div>
                </label>
                <p className=" text-center mt-6 font-bold text-l">Томи Андреев</p>
            </div>
            <div className="space-y-2">
                <p className="font-bold">Социјални профили</p>
                <p>останете во контакт и споделете го вашиот напредок со заедницата</p>
                <div className="space-y-4">
                    <ProfiliInput socijalnaMreza="facebook" />
                    <ProfiliInput socijalnaMreza="instagram" />
                    <ProfiliInput socijalnaMreza="linkedin" />                    
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Button style="border-orange-500" value="Ќе прилагодам подоцна"/>              
                <Button style="border-orange-500 bg-orange-500 px-12" value="Зачувај поставки"/>
            </div>
            </form>
        </div>
    );
};

export default filip;
