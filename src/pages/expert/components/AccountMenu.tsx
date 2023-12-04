import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./AccountMenu.module.css";
import Human from "../assets/human.svg"; // Your human icon
import DropdownArrow from "../assets/dropdownArrow.svg";

const AccountMenu = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Human} alt="Account Menu" />
      <Dropdown className={styles.dropdown}>
        <Dropdown.Toggle id="dropdown-basic" as="div" className={styles.toggle}>
          Hello world
          <img src={DropdownArrow} alt="menu" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#action">Expert John</Dropdown.Item>
          <Dropdown.Item href="#another-action">John</Dropdown.Item>
          <Dropdown.Item href="#something-else">Doe</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AccountMenu;
