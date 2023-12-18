import React from 'react';

import styles from './ModalHeader.module.css';

interface ModalHeaderProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, subtitle, children }) => {
    return (
        <div className={styles.modalHeader}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};

export default ModalHeader;