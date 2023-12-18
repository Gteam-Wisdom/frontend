import React, { useState } from 'react';

import Button from "../../components/button/Button";
import TabButton from "../../components/tab-button/TabButton";
import PersonalInformation from "../../components/personal-information/PersonalInformation";
import Achievements from "../../components/achievements/Achievements";
import Billing from "../../components/billing/Billing";

import styles from './Profile.module.css';

enum TabOptions {
  Personal = 'personal',
  Achievements = 'achievements',
  Billing = 'billing',
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.Personal);

  const handleTabClick = (tab: TabOptions) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabButtons}>
          <TabButton
            onClick={() => handleTabClick(TabOptions.Personal)}
            isActive={activeTab === TabOptions.Personal}
          >
            Personal Information
          </TabButton>
          <TabButton
            onClick={() => handleTabClick(TabOptions.Achievements)}
            isActive={activeTab === TabOptions.Achievements}
          >
            Achievements
          </TabButton>
          <TabButton
            onClick={() => handleTabClick(TabOptions.Billing)}
            isActive={activeTab === TabOptions.Billing}
          >
            Billing
          </TabButton>
        </div>
        {
          activeTab === TabOptions.Personal &&
          <Button className={styles.saveButton} onClick={() => {}}>
            Save changes
          </Button>
        }
      </div>
      {activeTab === TabOptions.Personal && <PersonalInformation />}
      {activeTab === TabOptions.Achievements && <Achievements />}
      {activeTab === TabOptions.Billing && <Billing />}
    </div>
  );
};

export default Profile;
