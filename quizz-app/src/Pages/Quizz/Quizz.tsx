import React, { FC, useMemo, useState } from 'react';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

const shuffleArray = <T=any>(array: T[]) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const QuizzPage = () => {
    const navigate = useNavigate();
    const [currIndex, setCurrIndex] = useState(0); 
    const [answer, setAnswer] = useState<string | null>(null);
    const { questions, setScore } = useStore(); // Не понимаю
    const currQuestion = questions[currIndex];

    const currAnswers = useMemo(() => {
        if (!currQuestion){
            return []
        }
        const result = [
            ...currQuestion.incorrect_answers, currQuestion.correct_answer
        ];
        shuffleArray(result)
        return result
    },[currQuestion])

    const handleAnswerCheck = (): void => {
        if (currQuestion?.correct_answer === answer){
            setScore((prev: number) => prev + 1)
        }
        if (currIndex === questions.length - 1){
            navigate('/result')
        }
        setCurrIndex((prev) => prev + 1)
        setAnswer(null)
    }

    return(
        <div>
            <h1>{currQuestion?.question}</h1>
            <div>
                {currAnswers.map((i) => <><input 
                onClick={() => {
                    setAnswer(i)
                }}
                type='radio' 
                value={i} 
                id={i}
                checked={i === answer}
                />
                <label>{i}</label></>)}
                <button onClick={handleAnswerCheck}>Next</button>
            </div>
        </div>
    );
}
export default QuizzPage