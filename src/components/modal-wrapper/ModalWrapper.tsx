import React from 'react';

import styles from './ModalWrapper.module.css';

interface ModalWrapperProps {
    children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
    return (
        <div className={styles.modalWrapper}>
            {children}
        </div>
    );
};

export default ModalWrapper;