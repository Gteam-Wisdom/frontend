import Stack from "../../../components/Stack";
import Typography from "../../../components/Typography";
import styles from "../HomePage.module.css";
import photo from "./assets/women.png";
import people from "./assets/people.svg";
import message from "./assets/message.svg";

const ExpertCard = () => {
  return (
    <Stack className={styles.cardBackground} direction="column" gap="10">
      <img src={photo} alt="avatar" />
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Leslie Alexander
      </Typography>
      <Typography variant="p1" secondary>
        Investment Expert
      </Typography>
      <Stack direction="row" justify="space-between">
        <Stack direction="row" className={styles.followersWrapper}>
          <div className={styles.svgWrapper}>
            <img src={people} alt="followers" />
          </div>
          <Typography sx={{ color: "rgba(100, 16, 143, 1)" }} variant="h3">
            3.380
          </Typography>
        </Stack>
        <div className={styles.messageButton}>
          <img src={message} alt="message" />
        </div>
      </Stack>
    </Stack>
  );
};

export default ExpertCard;
