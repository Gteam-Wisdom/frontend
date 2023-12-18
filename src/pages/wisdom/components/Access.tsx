import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./Access.module.css";

const Access: React.FC = () => {
  const [selectedOption, setSelectedOption] =
    useState<string>("Choose an option");

  const handleDropdownSelect = (selected: string | null) => {
    if (selected) {
      setSelectedOption(selected);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Access</h2>
      <Dropdown onSelect={handleDropdownSelect} className={styles.wrapperBg}>
        <Dropdown.Toggle
          variant="none"
          id="dropdown-basic"
          className={styles.button}
        >
          {selectedOption}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="option1">Option 1</Dropdown.Item>
          <Dropdown.Item eventKey="option2">Option 2</Dropdown.Item>
          <Dropdown.Item eventKey="option3">Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Access;
