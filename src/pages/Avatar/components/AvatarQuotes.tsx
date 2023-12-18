import Typography from "../../../components/Typography";
import styles from "./AvatarQuotes.module.css";
import Tag from "../../wisdom/components/Tag";
import { Stack } from "../../../components/Stack";

const AvatarQuotes = () => {
  return (
    <div className={styles.wrapper}>
      <Typography bold sx={{ fontSize: "18px" }}>
        Alice Cooper rate didn’t match your requirements
      </Typography>
      <Stack direction="row" className={styles.tags}>
        <Tag text="Invalid information"></Tag>
        <Tag text="Poor answer"></Tag>
      </Stack>
      <Typography sx={{ width: "fit-content", alignSelf: "flex-start" }}>
        Message
      </Typography>
      <div className={styles.message}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "start",
            padding: "0 0 10px 0",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Typography>
        <Typography variant="p2" secondary>
          10:20
        </Typography>
      </div>
    </div>
  );
};

export default AvatarQuotes;
