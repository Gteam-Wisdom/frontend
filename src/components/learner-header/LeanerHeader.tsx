import React, {useState} from 'react';

import Header from "../header/Header";
import Button from "../button/Button";

import logo from '../header/assets/logo.svg';
import iconProfile from './assets/icon-profile.svg';
import iconQuestion from './assets/icon-question.svg';
import iconSearch from './assets/icon-search.svg';

import styles from './LeanerHeader.module.css';

interface HeaderProps {
  children?: React.ReactNode;
  pageTitle?: string
}

const LeanerHeader: React.FC<HeaderProps> = ({ children, pageTitle }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handleClick = (e: any) => {
        console.log(e);
    };

  return (
    <Header>
        <h4 className={styles.headerTitle}>{pageTitle}</h4>
        <div className={styles.headerContent}>
          <Button>
            <img src={iconSearch} alt="Icon Search"/>
          </Button>
          <Button>
            <img src={iconQuestion} alt="Icon Question"/>
          </Button>
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            <p>Eng</p>
            {isCollapsed ? <i className={`${styles.arrow} ${styles.up}`}></i> : <i className={`${styles.arrow} ${styles.down}`}></i>}
          </Button>
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            <img src={iconProfile} alt="Icon Profile"/>
            <p>Learner Jenny</p>
            {isCollapsed ? <i className={`${styles.arrow} ${styles.up}`}></i> : <i className={`${styles.arrow} ${styles.down}`}></i>}
          </Button>
          <img src={logo} alt="Logo"/>


        </div>
    </Header>
  );
};

export default LeanerHeader;
