import { useCallback, useState } from "react";
import styles from "./AvatarView.module.css";
import AvatarMenuSection from "./components/AvatarMenuSection";
import DashboardPage from "../dashboard-page/DashboardPage";
import AvatarInfo from "./AvatarInfo";
import AvatarReviews from "./AvatarReviews";

const AvatarView = () => {
  const [page, setPage] = useState("1");

  const pageClickHandle = useCallback((pageNum: string) => {
    setPage(pageNum);
  }, []);
  return (
    <div className={styles.wrapper}>
      <AvatarMenuSection pageClickHandle={pageClickHandle}></AvatarMenuSection>
      <div className={styles.content}>
        {page === "1" ? (
          <AvatarInfo />
        ) : page === "2" ? (
          <DashboardPage />
        ) : (
          <AvatarReviews />
        )}
      </div>
    </div>
  );
};

export default AvatarView;
