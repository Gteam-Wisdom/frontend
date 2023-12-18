import { FunctionComponent } from "react";
import styles from "./Tag.module.css";

interface Props {
  text: string;
}

const Tag: FunctionComponent<Props> = ({ text }) => {
  return <div className={styles.tag}>{text}</div>;
};

export default Tag;
