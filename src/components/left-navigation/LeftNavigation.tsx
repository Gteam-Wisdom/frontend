import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button/Button";

import iconCommunity from "./assets/icon-community.svg";
import iconHome from "./assets/icon-home.svg";
import iconHelp from "./assets/icon-help.svg";
import iconProfile from "./assets/icon-profile.svg";
import iconUser from "./assets/icon-user.svg";
import iconChats from "./assets/icon-chats.svg";
import iconDashboard from "./assets/icon-dashboard.svg";

import styles from "./LeftNavigation.module.css";

interface LeftNavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  activeTab,
  onTabClick,
}) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const navigationItems = [
    { name: "Home", path: "", iconUrl: iconHome },
    { name: "Dashboard", path: "dashboard", iconUrl: iconDashboard },
    { name: "Chats", path: "chats", iconUrl: iconChats },
    { name: "Community", path: "community", iconUrl: iconCommunity },
    { name: "Profile", path: "profile", iconUrl: iconProfile },
    { name: "Help", path: "help", iconUrl: iconHelp },
  ];

  return (
    <div
      className={`${styles.leftNavigation} ${
        isCollapsed ? styles.collapsed : ""
      }`}
    >
      <div className={styles.navigationItems}>
        <div className={styles.navigationItemsTop}>
          <img className={styles.linkIcon} src={iconUser} alt={"Icon User"} />
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            {isCollapsed ? (
              <i className={`${styles.arrow} ${styles.right}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.left}`}></i>
            )}
          </Button>
        </div>
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${styles.linkWithIcon} ${
              activeTab === item.name.toLowerCase() ? styles.active : ""
            }`}
            onClick={() => onTabClick(item.name.toLowerCase())}
          >
            <img
              src={item.iconUrl}
              alt={item.name}
              className={styles.linkIcon}
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNavigation;
