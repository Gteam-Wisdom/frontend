import React from "react";
import styles from "./AddNewCollection.module.css";
import Add from "../assets/addBlack.svg";
import CreateNewCollection from "./dialogs/CreateNewCollection";

const AddNewCollection = () => {
  return (
    <div className={styles.button}>
      <CreateNewCollection>
        <img src={Add} alt="Add new collection" className={styles.img} /> Add
        new collection
      </CreateNewCollection>
    </div>
  );
};

export default AddNewCollection;
