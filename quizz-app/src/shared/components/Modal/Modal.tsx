import React, { FC, PropsWithChildren } from 'react';
import cls from './Modal.module.css'
import Form from '../Form/Form';

interface IModal{
    visible: boolean,
    setVisible: (vis: boolean) => void,
}

const Modal: FC<IModal> = ({ visible, setVisible}) => {
    const rootClasses = [cls.modal]
    
    if(visible){
        rootClasses.push(cls.active)
    }
    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                <Form />
            </div>
        </div>
    );
}
export default Modal