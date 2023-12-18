import Typography from "../../components/Typography";
import HeaderMenu from "../expert/components/HeaderMenu";
import styles from "./Header.module.css";
import { useHeaderText } from "./HeaderContext";

const Header = () => {
  const { headerText } = useHeaderText();

  return (
    <div className={styles.wrapper}>
      {headerText.length === 0 ? (
        <Typography variant="h1" bold>
          Expert
        </Typography>
      ) : (
        <Typography variant="h1" bold>
          {headerText}
        </Typography>
      )}
      <HeaderMenu />
    </div>
  );
};

export default Header;
