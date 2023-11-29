import { FunctionComponent } from "react";
import styles from "../Wisdom.module.css";

interface Props {
  status: string;
}

const RenderItemOnStatus: FunctionComponent<Props> = ({ status }) => {
  let circleColor = "";
  switch (status) {
    case "Approved":
      circleColor = "green";
      break;
    case "Done":
      circleColor = "blue";
      break;
    case "In Progress":
      circleColor = "yellow";
      break;
    default:
      break;
  }

  return (
    <span
      className={styles.circle}
      style={{ backgroundColor: circleColor }}
    ></span>
  );
};
export default RenderItemOnStatus;
