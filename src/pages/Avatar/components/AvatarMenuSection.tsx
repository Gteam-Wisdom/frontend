import { FunctionComponent, useCallback, useState } from "react";
import Typography from "../../../components/Typography";
import styles from "./AvatarMenuSection.module.css";

interface NavBarProps {
  pageClickHandle: (page: string) => void;
}

const AvatarMenuSection: FunctionComponent<NavBarProps> = ({
  pageClickHandle,
}) => {
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
          Avatar Info
        </Typography>
      </button>
      <button id="2" onClick={handleClick}>
        <Typography className={num === "2" ? styles.selected : styles.default}>
          Dashboard
        </Typography>
      </button>
      <button id="3" onClick={handleClick}>
        <Typography className={num === "3" ? styles.selected : styles.default}>
          Rating settings
        </Typography>
      </button>
    </div>
  );
};

export default AvatarMenuSection;
