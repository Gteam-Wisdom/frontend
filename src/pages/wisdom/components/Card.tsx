import { FunctionComponent } from "react";
import styles from "../Wisdom.module.css";
import Typography from "../../../components/Typography";
import Button from "../../../components/button/Button";

interface CardProps {
  data: {
    collection_name: string;
    collection_path: string;
    date_created: string;
    file_name: string;
    file_path: string;
    file_type: string;
    status: string;
    tags: string;
    user_id: string;
  };
}

const Card: FunctionComponent<CardProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Nunito Sans",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "34px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        {data.collection_name}
      </Typography>
      <Button hasBorder isLong className={styles.button}>
        Open
      </Button>
    </div>
  );
};

export default Card;
