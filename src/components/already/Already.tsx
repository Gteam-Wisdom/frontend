import React from "react";

import styles from "./Already.module.css";

const Already: React.FC = () => {
  return (
    <p className={styles.already}>
      Already have an account? <a href="/login">Log In</a>
    </p>
  );
};

export default Already;
