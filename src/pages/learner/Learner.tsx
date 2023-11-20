import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import LeftNavigation from "../../components/left-navigation/LeftNavigation";
import LeanerHeader from "../../components/learner-header/LeanerHeader";

import styles from "./Learner.module.css";

const Learner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.learner}>
      <LeanerHeader pageTitle={activeTab}/>
      <div className={styles.pageContent}>
        <LeftNavigation activeTab={activeTab} onTabClick={handleTabClick} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Learner;
