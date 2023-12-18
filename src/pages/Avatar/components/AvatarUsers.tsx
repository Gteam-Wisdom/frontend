import Stack from "../../../components/Stack";
import Typography from "../../../components/Typography";
import styles from "./AvatarUsers.module.css";
import Stars from "./Stars";

const AvatarUsers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userChoose}>
        <Stack direction="column">
          <Typography bold sx={{ width: "fit-content" }}>
            Alice Cooper
          </Typography>
          <Stars></Stars>

          <Typography variant="p2" secondary>
            29 Sep 2023. 08.20pm
          </Typography>
          <div className={styles.status}></div>
        </Stack>
      </div>
      <div className={styles.user}>
        <Stack direction="column">
          <Typography bold sx={{ width: "fit-content" }}>
            Esther Howard
          </Typography>
          <Stars></Stars>
          <Typography variant="p2" secondary>
            29 Sep 2023. 08.20pm
          </Typography>
          <div className={styles.statusY}></div>
        </Stack>
      </div>
      <div className={styles.user}>
        <Stack direction="column">
          <Typography bold sx={{ width: "fit-content" }}>
            Guy Hawkins
          </Typography>
          <Stars></Stars>
          <Typography variant="p2" secondary>
            29 Sep 2023. 08.20pm
          </Typography>
          <div className={styles.statusY}></div>
        </Stack>
      </div>
    </div>
  );
};

export default AvatarUsers;
