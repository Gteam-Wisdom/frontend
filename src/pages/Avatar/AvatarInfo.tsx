import Typography from "../../components/Typography";
import styles from "./AvatarInfo.module.css";
import Human from "./assets/human.svg";
import Edit from "./assets/edit.svg";
import Tag from "../wisdom/components/Tag";
import EditMenu from "../wisdom/components/EditMainCollection";
import Starred from "../wisdom/assets/starred.svg";
import Stack from "../../components/Stack";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import Record from "./assets/record.svg";
import UploadNewFile from "../wisdom/components/dialogs/UploadNewFile";
import UploadNewLink from "../wisdom/components/dialogs/UploadNewLink";

const tags = [
  {
    tag: "Investments",
  },
  {
    tag: "AI",
  },
  {
    tag: "Career",
  },
  {
    tag: "Design",
  },
  {
    tag: "Books",
  },
  {
    tag: "Guidelines",
  },
];

const AvatarInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoSection}>
        <img src={Human} alt="Human" />
        <Typography bold sx={{ fontSize: "24px" }}>
          John AI expert
        </Typography>
        <button className={styles.editAvatar}>
          <img src={Edit} alt="Edit" />
        </button>
      </div>
      <div className={styles.collectionsSection}>
        <Typography bold sx={{ width: "fit-content" }}>
          Avatar Wisdom Collections
        </Typography>
        <div className={styles.collections}>
          <div className={styles.collection}>
            <Stack
              direction="row"
              align="center"
              justify="space-between"
              className={styles.collectionActions}
            >
              <Typography bold> Books collection</Typography>
              <Stack direction="row">
                <img src={Starred} alt="star" />
                <EditMenu>
                  <UploadNewFile></UploadNewFile>
                  <UploadNewLink></UploadNewLink>
                </EditMenu>
              </Stack>
            </Stack>
            <div className={styles.tagsSection}>
              {tags.map((e) => {
                return <Tag text={e.tag} />;
              })}
            </div>
          </div>
          <div className={styles.collection}>
            <Stack
              direction="row"
              align="center"
              justify="space-between"
              className={styles.collectionActions}
            >
              <Typography bold> Investments collection</Typography>
              <Stack direction="row">
                <img src={Starred} alt="star" />
                <EditMenu>
                  <UploadNewFile></UploadNewFile>
                  <UploadNewLink></UploadNewLink>
                </EditMenu>
              </Stack>
            </Stack>
            <div className={styles.tagsSection}>
              {tags.map((e) => {
                return <Tag text={e.tag} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.samples}>
        <Typography bold sx={{ width: "fit-content" }}>
          Records
        </Typography>
        <div className={styles.collection}>
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            className={styles.collectionActions}
          >
            <Typography bold> My voice sample</Typography>
            <Stack direction="row">
              <img src={Starred} alt="star" />
              <EditMenu></EditMenu>
            </Stack>
          </Stack>
          <Stack direction="row" align="center" justify="space-between">
            <img src={Record} alt="record" />
            <Typography>Record.mp4</Typography>
          </Stack>
        </div>
      </div>
      <div className={styles.channels}>
        <Typography bold sx={{ width: "fit-content" }}>
          Channels
        </Typography>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Allow other avatar to answer questions"}
        ></ToggleSwitch>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Chat Window"}
        ></ToggleSwitch>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Wisdosity.com"}
        ></ToggleSwitch>
      </div>
    </div>
  );
};

export default AvatarInfo;
