import React, { useState } from "react";
import Image from "next/image";
import AppButton from "../AppButton/AppButton";
import AfterRegisterCheckBox from "../AfterRegisterCheckBox";
import AfterRegisterInputsComponent from "../AfterRegisterInputsComponent";

const PopUpAfterRegister = () => {
  const [lekcii, setLekcii] = useState(true);
  const [napredokPreporaki, setNapredokPreporaki] = useState(true);
  const [promotivniPonud, setPromotivniPonud] = useState(true);
  const [novini, setNovini] = useState(true);
  return (
    <div className="px-[10%] py-4">
      <form className="space-y-6" action="">
        <div className="space-y-4">
          <p className="font-bold">E-mail нотификации</p>
          <p>за што би сакале да бидете известени преку е-пошта</p>
          <div className="px-2 flex text-[#2870ED]">
            <AfterRegisterCheckBox
              setVariable={setLekcii}
              variable={lekcii}
              value={"Известувања за нови лекции и материјали"}
              id="lekcii"
            />
            <AfterRegisterCheckBox
              setVariable={setNapredokPreporaki}
              variable={napredokPreporaki}
              value={"Напредок и препораки"}
              id="preporaki"
            />
          </div>
          <div className="px-2 flex text-[#2870ED]">
            <AfterRegisterCheckBox
              setVariable={setPromotivniPonud}
              variable={promotivniPonud}
              value={"Промотивни понуди и матектинг од Шпаркасе банка"}
              id="ponudi"
            />
            <AfterRegisterCheckBox
              setVariable={setNovini}
              variable={novini}
              value={"Новини на плаатформа и настани"}
              id="novini"
            />
          </div>
        </div>
        <div className="flex justify-between relative rounded-lg pl-16 pr-16 pt-20 pb-20 bg-[#2870ED]">
          <div className=" text-white w-[50%] my-auto text-left">
            <p className="text-2xl">Лука и Ана ти посакуваат</p>
            <p className="text-5xl font-bold mb-8 mt-7">Добредојде на </p>
            <p className="text-5xl font-bold ">VibeOnEdu!</p>
          </div>
          <div className="absolute bottom-0  right-[10%] flex justify-center text-center">
            <Image
              src="/images/popups/AfterRegisterPopUpImgs/afterRegisterImg.png"
              alt="Welcome Image"
              width={450}
              height={440}
              className=" "
            />
          </div>
        </div>
        <p className="text-xl">
          За подобро искуство, персонализирај го твојот профил и додади
          информации за твоите цели и интереси.
        </p>
        <div>
          <input type="file" id="addPicture" hidden />
          <label htmlFor="addPicture">
            <div className="text-orange-400 cursor-pointer rounded-lg flex flex-col  items-center justify-center w-32 h-32 m-auto border-orange-400 border-4 font-bold">
              <p>Додади</p>
              <p>фотографија</p>
            </div>
          </label>
          <p className=" text-center mt-6 font-bold text-l">Томи Андреев</p>
        </div>
        <AfterRegisterInputsComponent />
        <div className="flex justify-center gap-4">
          <AppButton
            padding="10px 20px "
            backgroundColor="#FFFFFF"
            margin="1rem 0"
          >
            Ќе прилагодам подоцна
          </AppButton>
        </div>
      </form>
    </div>
  );
};

export default PopUpAfterRegister;
