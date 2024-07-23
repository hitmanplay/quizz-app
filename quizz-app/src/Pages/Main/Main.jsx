import React, { useState } from 'react';
import cls from './Main.module.css'
import Modal from '../../shared/components/Modal/Modal.jsx'

const Main = (fetchQuestions) => {
    const [modal, setModal] = useState(false)
    
    return(
        <div className={cls.main}>
            <h1 className={cls.title}>Quizz App</h1>
            <button className={cls.start} onClick={() => setModal(true)}>Start</button>
            <Modal visible={modal} setVisible={setModal} fetchQuestions={fetchQuestions}/>
        </div>
    );
}
export default Main