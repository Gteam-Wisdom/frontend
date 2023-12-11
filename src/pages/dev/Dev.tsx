import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Dev.module.css";
import UploadNewFile from "../wisdom/components/dialogs/UploadNewFile";
import UploadNewLink from "../wisdom/components/dialogs/UploadNewLink";
import CreateNewCollection from "../wisdom/components/dialogs/CreateNewCollection";
import Avatar from "../Avatar/Avatar";
import ExpertProfileView from "../ExpertProfile/ExpertProfileView";

const Dev: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* <UploadNewFile /> */}
      <UploadNewLink />
      {/* <CreateNewCollection /> */}
      {/* <Avatar></Avatar> */}
      {/* <ExpertProfileView /> */}
    </>
  );
};

export default Dev;
