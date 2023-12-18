import React from "react";
import Starred from "../../../assets/img/starFilled.svg";
import styles from "./stars.module.css";

const Stars = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Starred} alt="star" />
      <img src={Starred} alt="star" />
      <img src={Starred} alt="star" />
      <img src={Starred} alt="star" />
      <img src={Starred} alt="star" />
    </div>
  );
};

export default Stars;
