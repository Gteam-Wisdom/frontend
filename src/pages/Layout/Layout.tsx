import { FunctionComponent, PropsWithChildren } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";
import Wisdom from "../../assets/img/wisdom.svg";
import Home from "../../assets/img/home.svg";
import Human from "../../assets/img/humanFillWhite.svg";
import Profile from "../../assets/img/profile.svg";

import { HeaderProvider } from "./HeaderContext";

const MenuItems = [
  {
    url: "",
    icon: Home,
    text: "Home",
  },
  {
    url: "wisdom",
    icon: Wisdom,
    text: "Wisdom",
  },
  {
    url: "avatar",
    icon: Human,
    text: "Avatar",
  },
  {
    url: "profile",
    icon: Profile,
    text: "Profile",
  },
];

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <HeaderProvider>
      <div className={styles.bg}>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar items={MenuItems} />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </HeaderProvider>
  );
};

export default Layout;
