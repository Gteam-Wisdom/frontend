import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Sort.module.css";

const Sort = () => {
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
        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sort;
