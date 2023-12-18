import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import Buttons from "../../components/buttons/Buttons";
import Plus from "./assets/plus.svg";
import styles from "./WisdomUpload.module.css";
import Button from "../../components/button/Button";

const WisdomUpload = () => {
  return (
    <div className={styles.wrapper}>
      <Stack align="center" className={styles.content} gap="32">
        <Typography variant="h1">Here Is Your Wisdom Collection</Typography>
        <Typography variant="p2" secondary>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
        </Typography>
        <Buttons>
          <Button isAccent isWide isCenter fit>
            <Stack direction="row" align="center" gap="12">
              <img src={Plus} alt="plus" /> Upload
            </Stack>
          </Button>
          <Button isWide hasBorder isLong fit>
            Create collection
          </Button>
        </Buttons>
      </Stack>
    </div>
  );
};

export default WisdomUpload;
