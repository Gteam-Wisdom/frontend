import HeaderMenu from "../expert/components/HeaderMenu";
import styles from "./Header.module.css";
import { useHeaderText } from "./HeaderContext";

const Header = () => {
  const { headerText } = useHeaderText();

  return (
    <div className={styles.wrapper}>
      {headerText.length === 0 ? <h1>Expert</h1> : headerText} <HeaderMenu />
    </div>
  );
};

export default Header;
