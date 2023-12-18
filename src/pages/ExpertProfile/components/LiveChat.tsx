import { Stack } from "../../../components/Stack";
import Typography from "../../../components/Typography";
import ToggleSwitch from "../../../components/toggle-switch/ToggleSwitch";
import styles from "./PersonalInformation.module.css";

const LiveChat = () => {
  return (
    <Stack align="flex-start" justify="space-between" gap={"50"}>
      <div className={styles.wrapper} style={{ width: "700px" }}>
        <Stack align="flex-start">
          <Stack align="flex-start" gap="24">
            <Typography variant="h2" bold>
              Live Chat
            </Typography>
            <Typography variant="h3">Details</Typography>
            <Typography variant="p1">Preferable days: Mon, Sat, Sun</Typography>
            <Typography variant="p1">Preferable time: 6pm, 7pm, 9pm</Typography>
            <Typography variant="p1">Duration: 15min, 30min, 1 hour</Typography>
            <Typography variant="p1">Price: $200, $400, $500</Typography>
          </Stack>
          <ToggleSwitch
            isToggled={undefined}
            onToggle={undefined}
            label={"Sync with google calendar"}
          ></ToggleSwitch>
          <ToggleSwitch
            isToggled={undefined}
            onToggle={undefined}
            label={"Automated reminders"}
          ></ToggleSwitch>
        </Stack>
      </div>
      <div className={styles.wrapper} style={{ width: "700px" }}>
        <Stack align="flex-start">
          <Stack align="flex-start" gap="24">
            <Typography variant="h2" bold>
              Workshops
            </Typography>
            <Typography variant="h3">Details</Typography>
            <Typography variant="p1">Topic: Lorem ipsum</Typography>
            <Typography variant="p1">Date: 13-12-2023</Typography>
            <Typography variant="p1">Price: $500</Typography>
          </Stack>
          <ToggleSwitch
            isToggled={undefined}
            onToggle={undefined}
            label={"Sync with google calendar"}
          ></ToggleSwitch>
          <ToggleSwitch
            isToggled={undefined}
            onToggle={undefined}
            label={"Automated reminders"}
          ></ToggleSwitch>
        </Stack>
      </div>
    </Stack>
  );
};

export default LiveChat;
