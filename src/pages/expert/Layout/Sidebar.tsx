import React, { FunctionComponent, useState } from "react";
import styles from "./Sidebar.module.css";
import ExpertIcon from "../assets/expertIcon.svg";
import { useNavigate } from "react-router";
import ToggleIcon from "../assets/toggleSidebar.svg";
import { useHeaderText } from "./HeaderContext";

interface MenuItem {
  url: string;
  icon: string;
  text: string;
}

interface Props {
  items: MenuItem[];
}

const Sidebar: FunctionComponent<Props> = ({ items }) => {
  const { setHeaderText } = useHeaderText();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true); // Add state for open/closed

  const handleItemClick = (url: string, name: string) => {
    setHeaderText(name);
    navigate(url);
    setSelectedItem(url);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.toggleWrapper}>
        <img src={ExpertIcon} alt="expert icon" />
        <div
          className={isOpen ? styles.toggleButton : styles.toggleButtonClicked}
          onClick={toggleSidebar}
        >
          <img src={ToggleIcon} alt="toggle" />
        </div>
      </div>
      {items.map((e: MenuItem) => (
        <div
          key={e.url}
          onClick={() => handleItemClick(e.url, e.text)}
          className={`${styles.button} ${
            selectedItem === e.url ? styles.buttonClicked : ""
          }`}
        >
          <img src={e.icon} alt="menu element" />
          {isOpen && <h1 className={styles.text}>{e.text}</h1>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
