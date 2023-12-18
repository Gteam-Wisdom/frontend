// Divider.tsx
import React, { FunctionComponent } from "react";
import styles from "./Divider.module.css";

interface DividerProps {
  text?: string;
}
/**
 * Simple divider component
 * @param {string} [text] - The optional text to be displayed beside the divider.
 * @returns {JSX.Element} The rendered Divider component.
 */
const Divider: FunctionComponent<DividerProps> = ({ text }) => {
  return (
    <div className={styles.divider}>
      <hr className={styles.hr} />
      {/* {text && <span className={styles["divider-text"]}>{text}</span>} */}
      {/* <hr className={styles.hr} /> */}
    </div>
  );
};

export default Divider;
