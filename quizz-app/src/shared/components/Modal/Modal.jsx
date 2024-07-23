import React from 'react';
import cls from './Modal.module.css'
import Form from '../Form/Form';

const Modal = ({children, visible, setVisible, fetchQuestions}) => {
    const rootClasses = [cls.modal]
    
    if(visible){
        rootClasses.push(cls.active)
    }
    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                <Form fetchQuestions={fetchQuestions}/>
            </div>
        </div>
    );
}
export default Modal