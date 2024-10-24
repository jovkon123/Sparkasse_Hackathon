import Answer from "./components/Answer"
import QuestionTracker from "./components/QuestionTracker"

const Question1 = () => {

    return(
        <div className="px-[10%] py-5 space-y-24">
            <QuestionTracker questionNumber={1} />
            <div className="space-y-12">
                <p className="text-4xl text-blue-500">Како е најдобро да се следат трошоците?</p>
                <Answer questions={['Не треба да се следат','Преку пишување во тетратка.','Преку пишувањето во тетратка, ексел-табели или апликации за следење на буџетот']} rightAnswer={1}  />
            </div>
        </div>
    )
}
Answer
export default Question1