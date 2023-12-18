import Man from "./assets/man.svg";
import styles from "../HomePage.module.css";
import Stack from "../../../components/Stack";
import Typography from "../../../components/Typography";

function Asking() {
  return (
    <Stack className={styles.askingWrapper}>
      <div className={styles.askingWrapper}>
        <img src={Man} alt="avatar"></img>
        <Stack justify="center">
          <Typography>Character Assistant</Typography>
          <Typography variant="p2" secondary sx={{ alignSelf: "start" }}>
            Try Saying:
          </Typography>
        </Stack>
      </div>

      <div className={styles.question}>
        <Typography variant="p2" sx={{ textAlign: "start" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          laboriosam?
        </Typography>
      </div>
      <div className={styles.question}>
        <Typography variant="p2" sx={{ textAlign: "start" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          laboriosam?
        </Typography>
      </div>
    </Stack>
  );
}

export default Asking;
