import { FunctionComponent, PropsWithChildren } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./EditMainCollection.module.css";
import Menu from "../assets/menuButton.svg";

const EditMenu: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="editMainCollection">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" as="div" className={styles.toggle}>
          <img src={Menu} alt="Menu Icon" />
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.menu}>{children}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default EditMenu;
