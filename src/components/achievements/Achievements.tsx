import React, {useState} from "react";

import Modal from "../modal/Modal";
import Layout from "../layout/Layout";

import iconAchievement from "./assets/icon-achievement.svg";

import styles from "./Achievements.module.css";

const Achievements: React.FC = () => {
  return (
    <div className={styles.achievements}>
      <Modal>
        <Layout>
          <h2 className={styles.achievementsTitle}>Certifications</h2>
          <AchievementItem
            icon={iconAchievement}
            title="Spend 100 hours for learning"
          />
          <AchievementItem
            icon={iconAchievement}
            title="Create 25 chats with experts"
          />
          <AchievementItem
            icon={iconAchievement}
            title="Successfully finish mentorship"
          />
          <AchievementItem
            icon={iconAchievement}
            title="Another Achievement"
          />
        </Layout>
      </Modal>
    </div>
  );
};

export default Achievements;

interface AchievementItemProps {
  icon: string;
  title: string;
}

export const AchievementItem: React.FC<AchievementItemProps> = ({ icon, title }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.achievementItem}>
      <img src={icon} alt={title} className={styles.achievementIcon} />
      <h3 className={styles.achievementTitle}>{title}</h3>
      <div className={styles.menuContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>...</button>
        {isMenuOpen && (
          <div className={styles.menu}>
            <button onClick={() => console.log('Menu Item 1')}>Menu Item 1</button>
            <button onClick={() => console.log('Menu Item 2')}>Menu Item 2</button>
            <button onClick={() => console.log('Menu Item 3')}>Menu Item 3</button>
          </div>
        )}
      </div>
    </div>
  );
};
