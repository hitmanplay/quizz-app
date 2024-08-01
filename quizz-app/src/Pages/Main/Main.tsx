import React, { Children, useState } from 'react';
import './Main.css'
import Modal from '@shared/components/Modal/Modal'


const Main = () => {
    const [modal, setModal] = useState(false)
    
    return(
        <div>
            <h1 className="title">Quizz App</h1>
            <button className="start" onClick={() => setModal(true)}>Start</button>
            <Modal visible={modal} setVisible={setModal} />
        </div>
    );
}
export default Main