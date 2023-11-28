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
          <Typography
            sx={{
              fontSize: "10px",
              margin: "2px",
            }}
          >
            Try Saying:
          </Typography>
        </Stack>
      </div>

      <div className={styles.question}>
        <Typography sx={{ fontSize: "12px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          laboriosam?
        </Typography>
      </div>
      <div className={styles.question}>
        <Typography sx={{ fontSize: "12px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          laboriosam?
        </Typography>
      </div>
    </Stack>
  );
}

export default Asking;
