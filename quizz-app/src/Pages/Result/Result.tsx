import React from 'react';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';


const ResultPage = () => {
    const nav = useNavigate()
    const { score, handleReset} = useStore();

    const handleRestart = () => {
        handleReset()
        nav('/')
    }
    return(
        <><div>FINAL SCORE: {score}</div>
        <button onClick={handleRestart}>Restart</button>
        </>
    );
}
export default ResultPage