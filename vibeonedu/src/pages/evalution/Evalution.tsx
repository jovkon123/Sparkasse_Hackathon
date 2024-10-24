import Image from "next/image"
import RadioEvaluation from "./components/RadioEvaluation"
import EvaluationButton from "./components/EvaluationButton"
const Evalution = () => {


    return (
        <div className="p-[5%]">
            <div className="flex justify-between rounded-lg p-8 bg-[#2870ED]">
                <div className="space-y-2 text-white w-[50%] my-auto text-left">
                    <p className="text-3xl">Ви благодариме</p>
                    <p className="text-3xl">Што го завршивте курсот!</p>
                </div>
                <div className="w-[50%] flex justify-center text-center">
                    <Image
                        src="/images/filip/spar_03.png"
                        alt="Welcome Image"
                        width={387}
                        height={440}
                        className="mb-[-35px]"
                    />
                </div>
            </div>
        <form action="">
            <div className="text-2xl">
                <p className="my-6 font-bold text-xl">Како го оценувате курсот?</p>
                <div className="space-y-4">
                    <RadioEvaluation id="odlicen" text="Одличен" value={5}  name="courseEvaluation" />
                    <RadioEvaluation id="dobar" text="Добар" value={4} name="courseEvaluation" />
                    <RadioEvaluation id="sreden" text="Среден" value={3}  name="courseEvaluation"/>
                    <RadioEvaluation id="los" text="Лош" value={2}  name="courseEvaluation"/>
                </div>
            </div>
            <div>
            <p className="my-6 font-bold text-xl">Дали би го препорачале овој курс?</p>
            <div className="space-y-4">
            <RadioEvaluation id="da" text="Да" value={1}  name="courseReckomendation"/>
            <RadioEvaluation id="ne" text="Ne" value={0}  name="courseReckomendation"/>
            </div>
            </div>
            <div className="mt-6 space-y-4">
                <label htmlFor="comment">1. Како може да го подобриме курсот</label>
                <textarea className="w-full h-32 border border-gray-300 rounded-lg focus:outline-none p-4" placeholder="Вашиот одговор тука.." name="comment" id="comment"></textarea>
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <EvaluationButton style="border-orange-500" value="Кон профилот"/>              
                <EvaluationButton style="border-orange-500 bg-orange-500 px-14 text-white" value="Испрати"/>
            </div>
        </form>
        </div>
    )
}

export default Evalution