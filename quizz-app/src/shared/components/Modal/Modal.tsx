import React, { FC, PropsWithChildren, useMemo } from 'react';
import './Modal.css'
import Form from '../Form/Form';

interface IModal{
    visible: boolean,
    setVisible: (vis: boolean) => void,
}

const Modal: FC<IModal> = ({ visible, setVisible}) => {
    const rootClasses = useMemo(() => {
        if(visible){
            return 'modal active' 
        }
        return 'modal'
    },[visible])
    return(
        <div className={rootClasses} onClick={() => setVisible(false)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <Form />
            </div>
        </div>
    );
}
export default Modal