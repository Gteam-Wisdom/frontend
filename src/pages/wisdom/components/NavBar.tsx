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
        <Typography variant="p1" bold={num === "1"} underline={num === "1"}>
          List View
        </Typography>
      </button>
      <button id="2" onClick={handleClick}>
        <Typography variant="p1" bold={num === "2"} underline={num === "2"}>
          Collection View
        </Typography>
      </button>
    </div>
  );
};

export default NavBar;
