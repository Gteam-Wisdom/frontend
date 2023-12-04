import { FunctionComponent, PropsWithChildren } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";
import Wisdom from "../assets/wisdom.svg";
import { HeaderProvider } from "./HeaderContext";

const MenuItems = [
  {
    url: "wisdom",
    icon: Wisdom,
    text: "Wisdom",
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
