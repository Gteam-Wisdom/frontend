import React from 'react';

import styles from './Buttons.module.css';

interface ButtonsProps {
    children: React.ReactNode;
}

const Buttons: React.FC<ButtonsProps> = ({ children }) => {
    return (
        <div className={styles.buttons}>
            {children}
        </div>
    );
};

export default Buttons;