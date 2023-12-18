import React from 'react';

import Button from '../../components/button/Button';

import styles from './TabButton.module.css';

interface TabButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ onClick, isActive, children }) => (
  <div className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}>
    <Button onClick={onClick}>{children}</Button>
  </div>
);

export default TabButton;
