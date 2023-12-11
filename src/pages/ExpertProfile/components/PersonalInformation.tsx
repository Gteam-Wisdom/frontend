import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";
import Divider from "../../../components/Divider/Divider";
import Typography from "../../../components/Typography";
import Buttons from "../../../components/buttons/Buttons";
import ToggleSwitch from "../../../components/toggle-switch/ToggleSwitch";
import styles from "./PersonalInformation.module.css";
import Geo from "../assets/geo.svg";
import Edit from "../assets/edit.svg";
import Phone from "../assets/edit.svg";
import Mail from "../assets/mail.svg";
import Man from "../../../assets/img/svg/man.png";
import UserRating from "../../chats-page/components/userrating";
import LiveChat from "./LiveChat";
import Stack from "../../../components/Stack";
import TopQuestions from "../../dashboard-page/components/TopQuestions";

const PersonalInformation = () => {
  return (
    <div>
      <div className={styles.personal}>
        <div className={styles.wrapper}>
          <div className={styles.sectionWithEdit}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Man} width={"44px"} height={"44px"} alt="Man" />
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography className={styles.sectionTitle}>
                  John Wilson
                </Typography>
                <Typography variant="p2">Investment expert</Typography>
                <UserRating
                  onRate={() => {}}
                  onRatingChange={() => {}}
                ></UserRating>
              </div>
            </div>
            <button>
              <img src={Edit} alt="Edit" />
            </button>
          </div>
          <Divider />
          <div className={styles.sectionWithEdit}>
            <Typography className={styles.sectionTitle}>Contacts</Typography>
            <button>
              <img src={Edit} alt="Edit" />
            </button>
          </div>
          <div className="flex-column-wrapper">
            <div className={styles.flexColumnItem}>
              <img src={Geo} alt="Map" />
              <Typography sx={{ marginLeft: "2px" }} variant="p2" secondary>
                W. Gray St. Utica, Pennsylvania
              </Typography>
            </div>
            <div className={styles.flexColumnItem}>
              <img src={Phone} alt="Phone" />
              <Typography sx={{ marginLeft: "2px" }} variant="p2" secondary>
                (270) 555-0117
              </Typography>
            </div>
            <div className={styles.flexColumnItem}>
              <img src={Mail} alt="Mail" />
              <Typography sx={{ marginLeft: "2px" }} variant="p2" secondary>
                <Link
                  to="mailto:jenny.wilson@example.com"
                  className="custom-link"
                >
                  jenny.wilson@example.com
                </Link>
              </Typography>
            </div>
          </div>
          <Divider />
          <div className={styles.sectionWithEdit}>
            <Typography className={styles.sectionTitle}>Bio</Typography>
            <button>
              <img src={Edit} alt="Edit" />
            </button>
          </div>
          <Typography className={styles.section} variant="p2" secondary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet,
            ¡consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit amet, consectetur, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit jamet, consectetur?
          </Typography>
          <Divider />
          <div className={styles.sectionWithEdit}>
            <Typography className={styles.sectionTitle}>
              Links to social media
            </Typography>
            <button>
              <img src={Edit} alt="Edit" />
            </button>
          </div>
          <Link to="https://www.linkedin.com/in/sylvain-duranton/">
            <Typography className={styles.section}>
              https://www.linkedin.com/in/sylvain-duranton/
            </Typography>
          </Link>
          <Divider />
          <Typography className={styles.sectionTitle}>
            Your additional services
          </Typography>
          <ToggleSwitch
            label="1:1 meetings"
            isToggled={false}
            onToggle={() => {}}
          />
          <ToggleSwitch
            label="Workshops"
            isToggled={false}
            onToggle={() => {}}
          />
          <div className={styles.sectionWithEdit}>
            <Typography className={styles.sectionTitle}>My category</Typography>
            <button>
              <img src={Edit} alt="Edit" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "auto",
                height: "26px",
                padding: "4px 12px",
                borderRadius: "24px",
                gap: "8px",
                background: "#F1E8F8",
              }}
            >
              AI x
            </div>
            <div
              style={{
                width: "auto",
                height: "26px",
                padding: "4px 12px",
                borderRadius: "24px",
                gap: "8px",
                background: "#F1E8F8",
              }}
            >
              Career x
            </div>
            <div
              style={{
                width: "auto",
                height: "26px",
                padding: "4px 12px",
                borderRadius: "24px",
                gap: "8px",
                background: "#F1E8F8",
              }}
            >
              Design x
            </div>
          </div>
        </div>
        <Stack>
          <LiveChat></LiveChat>
        </Stack>
      </div>
      <div style={{ alignSelf: "flex-end", width: "100%" }}>
        <TopQuestions></TopQuestions>
      </div>
    </div>
  );
};

export default PersonalInformation;
