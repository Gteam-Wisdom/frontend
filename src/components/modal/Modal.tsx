import React from 'react';

import styles from './Modal.module.css';

interface ModalProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ children, style }) => {
    return (
        <div className={styles.modal} style={style}>
            {children}
        </div>
    );
};

export default Modal;
