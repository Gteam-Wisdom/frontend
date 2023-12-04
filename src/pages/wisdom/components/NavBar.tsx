import { FunctionComponent, useCallback, useState } from "react";
import Typography from "../../../components/Typography";
import styles from "./NavBar.module.css";

interface NavBarProps {
  pageClickHandle: (page: string) => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({ pageClickHandle }) => {
  const [num, setNum] = useState("1");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const selected = e.currentTarget.id;
      setNum(selected);
      pageClickHandle(selected);
    },
    [pageClickHandle]
  );

  return (
    <div className={styles.navWrapper}>
      <button id="1" onClick={handleClick}>
        <Typography className={num === "1" ? styles.selected : styles.default}>
          List View
        </Typography>
      </button>
      <button id="2" onClick={handleClick}>
        <Typography className={num === "2" ? styles.selected : styles.default}>
          Collection View
        </Typography>
      </button>
    </div>
  );
};

export default NavBar;
