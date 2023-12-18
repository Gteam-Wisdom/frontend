import React, { FunctionComponent } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Sort.module.css";

interface SortProps {
  onSort: (column: string) => void;
}

const Sort: FunctionComponent<SortProps> = ({ onSort }) => {
  const handleSort = (column: string) => {
    onSort(column);
  };

  return (
    <Dropdown className={styles.wrapper}>
      <Dropdown.Toggle
        variant="primary"
        id="dropdown-basic"
        className={styles.button}
      >
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSort("file_name")}>
          File Name
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("file_type")}>
          File Type
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("date_created")}>
          Date Created
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("status")}>
          Status
        </Dropdown.Item>
        {/* Add more columns as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sort;
