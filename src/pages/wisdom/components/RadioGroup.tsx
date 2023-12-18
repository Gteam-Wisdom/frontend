import { SetStateAction, useState } from "react";
import Typography from "../../../components/Typography";
import styles from "./RadioGroup.module.css";

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ alignSelf: "flex-start", margin: "24px 0px" }}>
      <Typography variant="h1">Add this collection to</Typography>
      <div className={styles.radioWrapper}>
        <label className={styles.inputWrapper}>
          <input
            className={styles.radio}
            type="radio"
            value="Save as draft"
            checked={selectedOption === "Save as draft"}
            onChange={handleRadioChange}
          />
          Save as draft
        </label>
        <label className={styles.inputWrapper}>
          <input
            className={styles.radio}
            type="radio"
            value="Upload to wisdom"
            checked={selectedOption === "Upload to wisdom"}
            onChange={handleRadioChange}
          />
          Upload to wisdom
        </label>
      </div>
    </div>
  );
};

export default RadioGroup;
