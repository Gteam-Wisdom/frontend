import Stack from "../../../components/Stack";
import Typography from "../../../components/Typography";
import styles from "./AvatarUsers.module.css";

const AvatarUsers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Stack direction="column">
          <Typography bold sx={{ width: "fit-content" }}>
            Alice Cooper
          </Typography>
          <Typography variant="p2">29 Sep 2023. 08.20pm</Typography>
          <div className={styles.status}></div>
        </Stack>
      </div>
    </div>
  );
};

export default AvatarUsers;
