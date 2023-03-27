import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Modal = () => {
    const modal = useSelector(state => state.modal);

    useEffect(() => {
        console.log(modal);
    })

    return (
        <div id='popup' className={modal.active ? "on" : ""}>
            나는 팝업
        </div>
    );
};

export default Modal;