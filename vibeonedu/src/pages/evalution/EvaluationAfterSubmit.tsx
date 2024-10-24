import EvaluationButton from "./components/EvaluationButton"

const EvalutionAfterSubmit = () => {

    return (
        <div className="m-[5%]">
            <div className="text-5xl text-blue-600 text-center h-[30%]">
                <p>Ви благодариме за вашето време</p>
                <p>Вашата искреност е клучна за нашето</p>
                <p>подобрување</p>
            </div>
            <div className="h-1/2 flex items-center justify-center p-6">
                <img className="h-[80%]"src="/images/filip/evaluationAfterSubmit.svg" alt="" />
            </div>
            <div className="text-center mt-6">
                <EvaluationButton style="border-orange-500 cursor-pointer hover:border-orange-500/60 hover:bg-orange-500/60 bg-orange-500 text-white px-6" value="Кон профилот"/> 
            </div>
        </div>
    )
}
export default EvalutionAfterSubmit