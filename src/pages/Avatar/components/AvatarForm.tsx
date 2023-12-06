import { FunctionComponent } from "react";
import Typography from "../../../components/Typography";
import Button from "../../../components/button/Button";
import Buttons from "../../../components/buttons/Buttons";
import Input from "../../../components/input/Input";
import ToggleSwitch from "../../../components/toggle-switch/ToggleSwitch";
import styles from "./AvatarFrom.module.css";

interface Props {
  onSubmit: () => void;
}

const AvatarForm: FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <Typography sx={{ fontSize: "24px" }}> Create Avatar</Typography>
      <Input
        label="Displayed Name"
        placeholder="Name"
        container={{ width: "100%" }}
      ></Input>
      <></>
      <Input
        label="Add Tags"
        placeholder="Tags"
        container={{ width: "100%" }}
      ></Input>
      <Input
        label="Choose wisdom collection for avatar"
        placeholder="Collection"
        container={{ width: "100%" }}
      ></Input>
      <div className={styles.switchSection}>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Allow other avatar to answer questions"}
        ></ToggleSwitch>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Chat window"}
        ></ToggleSwitch>
        <ToggleSwitch
          isToggled={undefined}
          onToggle={undefined}
          label={"Windosity.com"}
        ></ToggleSwitch>
      </div>
      <Buttons>
        <Button isWide hasBorder onClick={onSubmit}>
          Save
        </Button>
        <Button isWide hasBorder isAccent onClick={onSubmit}>
          Cancel
        </Button>
      </Buttons>
    </div>
  );
};

export default AvatarForm;
