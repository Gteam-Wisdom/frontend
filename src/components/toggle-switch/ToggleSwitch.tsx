import React from "react";
import styles from "./ToggleSwitch.module.css";

// @ts-ignore
const ToggleSwitch = ({isToggled, onToggle, label}) => {
    return (
        <div className={styles.toggleSwitchContainer}>
            <label className={styles.toggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={styles.switch} />
            </label>
            <label className={styles.label} htmlFor={label}>
                {label}
            </label>
        </div>
    );
};

export default ToggleSwitch;