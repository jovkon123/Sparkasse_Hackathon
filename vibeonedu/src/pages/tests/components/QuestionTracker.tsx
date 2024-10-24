interface Props {
    questionNumber: number;
}

const QuestionTracker = ({ questionNumber }: Props) => {
    const divs = [];
    for (let i = 1; i <= 10; i++) {
        divs.push(
            <div 
                key={i} 
                className={`border border-blue-500 ${i === questionNumber ? 'bg-blue-500 text-white' : (i < questionNumber ? 'bg-green-500 text-white' : 'bg-white text-blue-500')} font-bold rounded-full h-12 w-12 mb-[-25px] flex justify-center items-center`}>
                {i < questionNumber ? "✓" : i}
            </div>
        );
    }

    return (
        <div>
            <div className="border-b-2 border-blue-500 flex justify-between">
                {divs}
            </div>
        </div>
    );
}

export default QuestionTracker;
