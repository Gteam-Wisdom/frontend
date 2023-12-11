import styles from "./HeaderMenu.module.css";
import Search from "../../../assets/img/search.svg";
import Record from "../../../assets/img/record.svg";
import Question from "../../../assets/img/question.svg";
import Logo from "../../../assets/img/logo.svg";
import AccountMenu from "./AccountMenu";

const HeaderMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionsWrapper}>
        <button>
          <img src={Search} alt="Search" />
        </button>
        <button>
          <img src={Record} alt="Record" />
        </button>
        <button>
          <img src={Question} alt="Question" />
        </button>
      </div>
      <></>
      <AccountMenu />
      <button>
        <img src={Logo} alt="Home" />
      </button>
    </div>
  );
};

export default HeaderMenu;
