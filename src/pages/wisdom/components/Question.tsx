import styles from "./Question.module.css";
import About from "../assets/question.svg";
import Typography from "../../../components/Typography";

const Question = () => {
  return (
    <div className={styles.wrapper}>
      <img src={About} alt="about" />
      <div className={styles.clue}>
        <Typography variant="p2" sx={{ color: "#FCFCFD" }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
        </Typography>
      </div>
    </div>
  );
};

export default Question;
