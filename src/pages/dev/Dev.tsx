import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Dev.module.css";
import UploadNewFile from "../wisdom/components/dialogs/UploadNewFile";
import UploadNewLink from "../wisdom/components/dialogs/UploadNewLink";
import CreateNewCollection from "../wisdom/components/dialogs/CreateNewCollection";

const Dev: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <UploadNewFile />
      <UploadNewLink />
      <CreateNewCollection />
    </div>
  );
};

export default Dev;
