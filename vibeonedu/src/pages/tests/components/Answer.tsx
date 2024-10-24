import React, { useState } from 'react';

interface Props {
    questions: string[];
    rightAnswer: number;
}

const Answer = ({ questions, rightAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswerClick = (index: number) => {
        setSelectedAnswer(index);
        setIsCorrect(index === rightAnswer);
    };

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index} className="mt-6">
                    <h3 className="font-bold text-lg mb-1">Question {index + 1}:</h3>
                    <div
                        onClick={() => handleAnswerClick(index)}
                        className={`px-3 rounded-xl w-full border-2 border-gray-300 p-2 cursor-pointer ${selectedAnswer === index ? (isCorrect ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-700') : 'bg-white'}`}
                    >
                        {question}
                    </div>
                </div>
            ))}
            {selectedAnswer !== null && (
                <div className="mt-24 text-center font-bold">
                    {isCorrect ? (<div className='flex items-center justify-between border border-green-700 bg-green-500 text-white rounded-xl p-12'><p className='flex items-center gap-2'><span className='text-5xl'>✓</span>Точен одговор! Продолжи со исто темпо!</p> <a href="#"><button className='border border-white px-6 rounded-lg py-2'>Следно прашање</button></a></div>) : 
                    (<div className='flex items-center border border-red-700 bg-red-500 text-white rounded-xl p-12'><span className='text-5xl'>✘</span>Одговорот е неточен! Пробај да го одговориш прашањето повторно!</div>)}
                </div>
            )}
        </div>
    );
};

export default Answer;
