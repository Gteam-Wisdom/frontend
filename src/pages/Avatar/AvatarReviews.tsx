import styles from "./AvatarReviews.module.css";
import AvatarQuotes from "./components/AvatarQuotes";
import AvatarUsers from "./components/AvatarUsers";

const AvatarReviews = () => {
  return (
    <div className={styles.wrapper}>
      <AvatarUsers></AvatarUsers>
      <AvatarQuotes></AvatarQuotes>
    </div>
  );
};

export default AvatarReviews;
